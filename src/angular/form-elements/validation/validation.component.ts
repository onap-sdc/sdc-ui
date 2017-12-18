import {
    AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnChanges, Output, QueryList,
    SimpleChanges
} from "@angular/core";
import {Subscribable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";
import {ControlValidation, IValidationErrorsDict, IValidator} from "./validation.model";
import {ValidatorComponent} from "./validator.component";
import template from "./validation.component.html";

export {ValidatorComponent};

export interface IValidationEvent {
    isValid: boolean;
    errors: string[];
    errorsDict: IValidationErrorsDict;
}

interface IValidationValidatorRepresentation {
    validatorComp: ValidatorComponent;
    validatorIndex: number;
    validatorChangeSubscription: AnonymousSubscription;
}

@Component({
    selector: 'sdc-validation',
    template
})
export class ValidationComponent implements OnChanges, AfterContentInit {
    public validation: ControlValidation;  // validation instance for the control

    @ContentChildren(ValidatorComponent) public validators: QueryList<ValidatorComponent>;

    @Input() public value: any;
    @Input() public valueEmitter: Subscribable<any>;
    private valueSubscription: AnonymousSubscription;

    @Input() public disabled: boolean;
    @Output() public validChange: EventEmitter<IValidationEvent> = new EventEmitter<IValidationEvent>();

    private validatorsRepresentations: IValidationValidatorRepresentation[];

    constructor() {
        this.validation = new ControlValidation();
        this.disabled = false;

        this.validatorsRepresentations = [];

        // bind methods references:
        this.initValidators = this.initValidators.bind(this);
        this.syncValidatorsDict = this.syncValidatorsDict.bind(this);
        this.validateControlValue = this.validateControlValue.bind(this);
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
                        this.validateControlValue(this.value);
                    });
                });
            }
        }

        // new value is assigned
        if (changes.value) {
            this.validateControlValue(this.value);
        }

        // enable/disable
        if (changes.disabled) {
            (this.disabled) ? this.resetValidation() : this.validateControlValue(this.value);
        }
    }

    public ngAfterContentInit() {
        this.initValidators();
        this.validators.changes.subscribe(this.initValidators);
    }

    private initValidators() {
        // make new validators array
        const newValidatorsArray: IValidationValidatorRepresentation[] = [];
        this.validators.forEach((validatorComp, idx) => {
            // make validator subscription and push to validators array
            const validatorCompSubIdx = this.validatorsRepresentations.findIndex(
                (vc) => vc.validatorComp === validatorComp);
            let validatorRepresentation: IValidationValidatorRepresentation;
            if (validatorCompSubIdx !== -1) {
                // remove the validator subscription from the array, so validators array ends with removed validators
                validatorRepresentation = this.validatorsRepresentations.splice(validatorCompSubIdx, 1)[0];
            } else {
                validatorRepresentation = {
                    validatorComp,
                    validatorIndex: null,
                    validatorChangeSubscription: null
                };
            }

            // set validator representation index
            validatorRepresentation.validatorIndex = idx;

            // check validator name duplication if name is externally set
            if (validatorComp.name) {
                if (newValidatorsArray.find((vc) => vc.validatorComp.name === validatorComp.name)) {
                    console.warn(`ValidationComponent: duplicate validator key "${validatorComp.name}".`);
                }
            }

            // subscribe to validator change
            if (!validatorRepresentation.validatorChangeSubscription) {
                validatorRepresentation.validatorChangeSubscription =
                    validatorComp.validatorChange.subscribe(this.syncValidatorsDict);
            }

            newValidatorsArray.push(validatorRepresentation);
        });

        // unsubscribe to the removed validators
        this.validatorsRepresentations.forEach((vc) => {
            vc.validatorChangeSubscription.unsubscribe();
        });

        this.validatorsRepresentations = newValidatorsArray;

        setTimeout(() => {
            this.syncValidatorsDict();
        });
    }

    private syncValidatorsDict() {
        const validatorsArray: IValidator[] = this.validators.map((validatorComp) => validatorComp.getValidator());
        this.validation.setValidators(validatorsArray);
        this.validateControlValue(this.value);
    }

    private syncValidatorComponentsAttributes() {
        if (!this.validators) {
            return;
        }

        // set each validator component isValid and errors
        this.validators.forEach((validatorComp) => {
            if (this.validation.errorsDict[validatorComp.name]) {
                validatorComp.isValid = false;
                validatorComp.errors = this.validation.errorsDict[validatorComp.name];
            } else {
                validatorComp.isValid = true;
                validatorComp.errors = null;
            }
        });
    }

    public resetValidation() {
        this.validation.reset();
        this.syncValidatorComponentsAttributes();
    }

    public validateControlValue(value: any) {
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
