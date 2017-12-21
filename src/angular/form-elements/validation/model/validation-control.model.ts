import {isEqual} from "lodash";
import {
    IValidationControl, IValidator, IValidationChildrenDict, IValidationErrorsDict, ValidatorTypes
} from "./validation.type";

export class ValidationControl implements IValidationControl {
    public static CHILDREN_KEY = '_children';
    public validators: IValidator[];
    public children: IValidationChildrenDict;
    public isValid: boolean;
    public errorsDict: IValidationErrorsDict;
    public errors: string[];

    constructor(validators?: IValidator[], children?: IValidationChildrenDict) {
        this.setValidators(validators ? validators : []);
        this.setChildren(children ? children : {});
    }

    // sets all the validators
    public setValidators(validators: IValidator[]): void {
        this.validators = validators ? validators : [];
        this.reset();
    }

    // sets all the children validations
    public setChildren(children: IValidationChildrenDict) {
        this.children = children;
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

    // add a child validation
    public setSingleChild(key: string, child: ValidationControl) {
        this.children[key] = child;
    }

    // remove a child validation
    public removeChild(key: string) {
        delete this.children[key];
    }

    // get a child validation
    public getChild(key: string) {
        return this.children[key];
    }

    // returns true whether the validation has validator of given type
    public hasValidatorOfType(validatorType: ValidatorTypes): boolean {
        return Object.keys(this.validators).findIndex(
            (validatorKey: string) => this.validators[validatorKey].type === validatorType
        ) !== -1;
    }

    // validates a single validator and returns [isValid, errors]
    public validateSingle(validator: IValidator, value: any): [boolean, string[]|null] {
        let isValid: boolean = true;
        let errors: string[]|null = null;
        switch (validator.type) {
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
        return [isValid, errors];
    }

    // reset validation
    public reset() {
        this.isValid = true;
        this.errorsDict = null;
        this.errors = null;
    }

    // validates the input value and sets errors and isValid (returns isValid)
    public validate(value: any): boolean {
        let isValid = true;
        let errorsDict = {};
        let errors = [];

        // validate validators
        this.validators.every((validator, idx) => {
            const validSingle = this.validateSingle(validator, value);
            if (!validSingle[0]) {
                const validatorName = validator.name || String(idx);
                isValid = false;
                errorsDict[validatorName] = validSingle[1];
                errors.push(...errorsDict[validatorName]);
                if (validator.stop) {
                    return false;
                }
            }
            return true;
        });

        // validate children
        let childIsValid = true;
        const childrenErrorsDict = {};
        Object.keys(this.children).forEach((childKey) => {
            const child = this.children[childKey];
            child.validate(value[childKey]);

            if (!child.isValid) {
                childIsValid = false;
                childrenErrorsDict[childKey] = child.errorsDict;
            }
        });
        // if children are not valid, add children errorsDict to errorsDict
        if (!childIsValid) {
            isValid = false;
            errorsDict[ValidationControl.CHILDREN_KEY] = childrenErrorsDict;
        }

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
        }

        return this.isValid;
    }
}
