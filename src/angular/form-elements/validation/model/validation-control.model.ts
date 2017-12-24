import {isEqual} from "lodash";
import {Subject} from "rxjs/Subject";
import {
    IValidationControl, IValidator, IValidationErrorsDict, ValidatorTypes, IValidationChange
} from "./validation.type";
import {AnonymousSubscription} from "rxjs/Subscription";

interface ISubValidationInfo {
    validation: IValidationControl;
    validChangesSubscription: AnonymousSubscription;
}

export class ValidationControl implements IValidationControl {
    public validators: IValidator[];
    public isValid: boolean;
    public errorsDict: IValidationErrorsDict;
    public errors: string[];
    public validChanges: Subject<IValidationChange>;
    private subValidationsInfos: ISubValidationInfo[];
    private value: any;

    private _disabled: boolean;
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        if (this._disabled !== disabled) {
            if (disabled) {
                this.reset();
                this._disabled = disabled;
            } else {
                this._disabled = disabled;
                this.validate(this.value);
            }
        }
    }

    constructor(validators?: IValidator[]) {
        this.validChanges = new Subject<IValidationChange>();
        this.subValidationsInfos = [];

        this.setValidators(validators ? validators : []);
    }

    // sets all the validators
    public setValidators(validators: IValidator[]): void {
        this.validators = validators ? validators : [];

        // make sub-validation subscriptions
        const subValidationsInfosArray: ISubValidationInfo[] = [];
        this.validators.forEach((validator) => {
            // if validator is sub-validation (type sibling/child), then subscribe to sub validations changes
            if (this.isSubValidation(validator)) {
                const subValidationInfoIdx = this.subValidationsInfos.findIndex(
                    (svi) => svi.validation === validator.validation);
                let subValidationInfo: ISubValidationInfo;
                if (subValidationInfoIdx !== -1) {
                    // remove the sub-validation subscription from the array,
                    // so sub-validations array ends with removed validators
                    subValidationInfo = this.subValidationsInfos.splice(subValidationInfoIdx, 1)[0];
                } else {
                    subValidationInfo = {
                        validation: validator.validation,
                        validChangesSubscription: validator.validation.validChanges.subscribe(() => {
                            this.validate(this.value);
                        })
                    };
                }
                subValidationsInfosArray.push(subValidationInfo);
            }
        });
        // unsubscribe to the removed sub-validations
        this.subValidationsInfos.forEach((svi) => {
            svi.validChangesSubscription.unsubscribe();
        });
        // set new sub-validations subscriptions
        this.subValidationsInfos = subValidationsInfosArray;

        this.reset();
    }

    // sets (adds or replaces) a validator object in validators list
    public setSingleValidator(validator: IValidator, index: number = null, replace: boolean = false): void {
        this.validators.splice(
            index !== null ? index : this.validators.length,
            replace ? 1 : 0,
            validator
        );
    }

    // removes a validator from validators dict
    public removeValidator(index: number): void {
        this.validators.splice(index, 1);
    }

    // find validator in the validators list
    public findValidator(name: string) {
        const validatorIndex = this.findValidatorIndex(name);
        return validatorIndex === -1 ? null : this.validators[validatorIndex];
    }

    // find validator index in the validators list
    public findValidatorIndex(name: string) {
        return this.validators.findIndex((v) => v.name === name);
    }

    // returns true whether the validation has validator of given type
    public hasValidatorOfType(validatorType: ValidatorTypes): boolean {
        return Object.keys(this.validators).findIndex(
            (validatorKey: string) => this.validators[validatorKey].type === validatorType
        ) !== -1;
    }

    // validates a single validator and returns [isValid, errors]
    public validateSingle(validator: IValidator, value: any): [boolean, IValidationErrorsDict, string[]|null] {
        let isValid: boolean = true;
        let errorsDict: IValidationErrorsDict = null;
        let errors: string[]|null = null;
        if (!validator.disabled) {
            switch (validator.type) {
                case ValidatorTypes.CHILD:
                    if (!validator.validation.isValid) {
                        isValid = false;
                        errorsDict = validator.validation.errorsDict;
                    }
                    break;

                case ValidatorTypes.SIBLING:
                    if (!validator.validation.isValid) {
                        isValid = false;
                        errorsDict = validator.validation.errorsDict;
                        errors = validator.validation.errors;
                    }
                    break;

                case ValidatorTypes.REQUIRED:
                    if (!Boolean(value)) {
                        isValid = false;
                        errors = [validator.message];
                    }
                    break;

                case ValidatorTypes.REGEX:
                    if (!validator.patterns.every((pattern) => new RegExp(pattern).test(value))) {
                        isValid = false;
                        errors = [validator.message];
                    }
                    break;

                case ValidatorTypes.CUSTOM:
                    const err = validator.callback(value);
                    if (err !== null) {
                        isValid = false;
                        errors = (err instanceof Array) ? err : [err];
                    }
                    break;

                case ValidatorTypes.MANUAL:
                    if (validator.isError) {
                        isValid = false;
                        errors = [validator.message];
                    }
                    break;
            }
        }
        return [isValid, errorsDict, errors];
    }

    private isSubValidation(validator: IValidator) {
        return (validator.type === ValidatorTypes.CHILD || validator.type === ValidatorTypes.SIBLING);
    }

    private emitValidChange() {
        this.validChanges.next({
            isValid: this.isValid,
            errors: this.errors,
            errorsDict: this.errorsDict
        } as IValidationChange);
    }

    // reset validation
    public reset() {
        if (this._disabled) {
            return;
        }

        this.isValid = true;
        this.errorsDict = null;
        this.errors = null;
        this.emitValidChange();
    }

    // validates the input value and sets errors and isValid (returns isValid)
    public validate(value: any, opts: {forceEmit?: boolean} = {}): boolean {
        this.value = value;

        if (this._disabled) {
            return this.isValid;
        }

        let isValid = true;
        let errorsDict = {};
        let errors = [];

        // validate validators
        this.validators.every((validator, idx) => {
            const validSingle = this.validateSingle(validator, this.value);
            if (!validSingle[0]) {
                const validatorName = validator.name || String(idx);
                isValid = false;
                errorsDict[validatorName] = validSingle[1] || validSingle[2];  // use either errorsDict or errors
                errors.push(...validSingle[2]);  // only append errors
                if (validator.stop) {
                    return false;
                }
            }
            return true;
        });

        // if valid, set errorsDict and errors to null
        if (isValid) {
            errorsDict = null;
            errors = null;
        }

        // if valid or errorsDict is changed, then update model properties
        if (isValid !== this.isValid || !isEqual(errorsDict, this.errorsDict)) {
            this.isValid = isValid;
            this.errorsDict = errorsDict;
            this.errors = errors;
            this.emitValidChange();
        } else if (opts.forceEmit) {
            this.emitValidChange();
        }

        return this.isValid;
    }
}
