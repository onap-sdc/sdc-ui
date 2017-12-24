import {
    AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnChanges, Output, QueryList,
    SimpleChanges
} from "@angular/core";
import {Subscribable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";
import {ValidationControl, IValidationErrorsDict, IValidator} from "./model";
import {ValidatorComponent} from "./validator.component";
import template from "./validation.component.html";

export {ValidatorComponent};

export interface IValidationEvent {
    isValid: boolean;
    errors: string[];
    errorsDict: IValidationErrorsDict;
}

interface IValidatorCompInfo {
    validatorComp: ValidatorComponent;
    validatorName: string;
    validatorChangeSubscription: AnonymousSubscription;
}

@Component({
    selector: 'sdc-validation',
    template
})
export class ValidationComponent implements OnChanges, AfterContentInit {
    public validation: ValidationControl;  // validation instance for the control

    @ContentChildren(ValidatorComponent) public validators: QueryList<ValidatorComponent>;

    @Input() public value: any;
    @Input() public valueEmitter: Subscribable<any>;
    private valueSubscription: AnonymousSubscription;

    @Input() public disabled: boolean;
    @Input() public show: boolean;
    @Output() public validChange: EventEmitter<IValidationEvent> = new EventEmitter<IValidationEvent>();

    private validatorsCompInfo: IValidatorCompInfo[];

    constructor() {
        this.validation = new ValidationControl();

        this.disabled = false;
        this.show = true;

        this.validatorsCompInfo = [];
    }

    public ngOnChanges(changes: SimpleChanges): void {
        // new valueEmitter is assigned
        if (changes.valueEmitter) {
            if (this.valueSubscription) {
                this.valueSubscription.unsubscribe();
            }
            if (this.valueEmitter) {
                this.valueSubscription = this.valueEmitter.subscribe((value) => {
                    setTimeout(() => {
                        this.value = value;
                        this.validate(this.value);
                    });
                });
            }
        }

        // new value is assigned
        if (changes.value) {
            this.validate(this.value);
        }

        // enable/disable
        if (changes.disabled) {
            (this.disabled) ? this.reset() : this.validate(this.value);
        }
    }

    public ngAfterContentInit() {
        this.syncValidators();
        this.validators.changes.subscribe(() => this.syncValidators());
    }

    private syncValidators() {
        // make new validators array
        const newValidatorsCompInfoArray: IValidatorCompInfo[] = [];
        const newValidatorsArray: IValidator[] = [];
        this.validators.forEach((validatorComp, idx) => {
            // make validator subscription and push to validators array
            const validatorCompSubIdx = this.validatorsCompInfo.findIndex(
                (vci) => vci.validatorComp === validatorComp);
            let validatorCompInfo: IValidatorCompInfo;
            if (validatorCompSubIdx !== -1) {
                // remove the validator subscription from the array, so validators array ends with removed validators
                validatorCompInfo = this.validatorsCompInfo.splice(validatorCompSubIdx, 1)[0];
            } else {
                validatorCompInfo = {
                    validatorComp,
                    validatorName: null,
                    validatorChangeSubscription: null
                };
            }

            // set validator component info name
            validatorCompInfo.validatorName = validatorComp.name ? validatorComp.name : String(idx);

            // check validator name duplication if name is externally set
            if (validatorComp.name) {
                if (newValidatorsCompInfoArray.find((vc) => vc.validatorComp.name === validatorComp.name)) {
                    console.warn(`ValidationComponent: duplicate validator key "${validatorComp.name}".`);
                }
            }

            // subscribe to validator change
            if (!validatorCompInfo.validatorChangeSubscription) {
                validatorCompInfo.validatorChangeSubscription =
                    validatorComp.validatorChange.subscribe((validator) => {
                        this.syncSingleValidator(idx, validator);
                    });
            }

            newValidatorsArray.push(validatorComp.getValidator());
            newValidatorsCompInfoArray.push(validatorCompInfo);
        });

        // unsubscribe to the removed validators
        this.validatorsCompInfo.forEach((vci) => {
            vci.validatorChangeSubscription.unsubscribe();
        });

        this.validatorsCompInfo = newValidatorsCompInfoArray;

        // set validation validators array
        this.validation.setValidators(newValidatorsArray);

        setTimeout(() => {
            this.validate(this.value);
        });
    }

    private syncSingleValidator(index: number, validator: IValidator) {
        this.validation.setSingleValidator(validator, index, true);
        this.validate(this.value);
    }

    private syncValidatorComponentsAttributes() {
        if (!this.validators) {
            return;
        }

        // set each validator component isValid and errors
        this.validatorsCompInfo.forEach((validatorCompInfo) => {
            if (this.validation.errorsDict && this.validation.errorsDict[validatorCompInfo.validatorName]) {
                validatorCompInfo.validatorComp.isValid = false;
                validatorCompInfo.validatorComp.errors = this.validation.errorsDict[validatorCompInfo.validatorName];
            } else {
                validatorCompInfo.validatorComp.isValid = true;
                validatorCompInfo.validatorComp.errors = null;
            }
        });
    }

    public reset() {
        this.validation.reset();
        this.syncValidatorComponentsAttributes();
    }

    public validate(value: any) {
        if (this.disabled) {
            return;
        }

        const oldIsValid = this.validation.isValid;
        const oldErrorsDict = this.validation.errorsDict;

        // validate the value
        this.validation.validate(value);

        this.syncValidatorComponentsAttributes();

        // only if validation is changed, then emit validate change
        if (this.validation.isValid !== oldIsValid || this.validation.errorsDict !== oldErrorsDict) {
            this.validChange.emit({
                isValid: this.validation.isValid,
                errors: this.validation.errors,
                errorsDict: this.validation.errorsDict
            } as IValidationEvent);
        }
    }
}
