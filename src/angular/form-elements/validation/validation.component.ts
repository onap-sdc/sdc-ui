import {
    AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList,
    SimpleChanges
} from "@angular/core";
import {Subscribable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";
import {ValidationControl, IValidator} from "./model";
import {ValidatorComponent} from "./validator.component";
import template from "./validation.component.html";
import {IValidationChange} from "./model/validation.type";

export {ValidatorComponent};

interface IValidatorCompInfo {
    validatorComp: ValidatorComponent;
    validatorName: string;
    validatorChangeSubscription: AnonymousSubscription;
}

@Component({
    selector: 'sdc-validation',
    template
})
export class ValidationComponent implements OnChanges, AfterContentInit, OnInit {
    public validation: ValidationControl;  // validation instance for the control

    @ContentChildren(ValidatorComponent) public validators: QueryList<ValidatorComponent>;

    @Input() public value: any;
    @Input() public valueEmitter: Subscribable<any>;
    private valueSubscription: AnonymousSubscription;

    @Input() public disabled: boolean;
    @Input() public show: boolean;
    @Output() public validChange: EventEmitter<IValidationChange> = new EventEmitter<IValidationChange>();

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
            this.validation.disabled = this.disabled;
        }
    }

    public ngOnInit() {
        this.validation.validChanges.subscribe((validChange: IValidationChange) => {
            this.syncValidatorComponentsAttributes();
            this.validChange.emit(validChange);
        });
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
            this.validate(this.value, {forceEmit: true});
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
            if (validatorCompInfo.validatorComp.show) {
                const validatorErrorsDict = this.validation.errorsDict &&
                    this.validation.errorsDict[validatorCompInfo.validatorName];
                if (validatorErrorsDict) {
                    validatorCompInfo.validatorComp.isValid = false;
                    if (validatorErrorsDict instanceof Array) {
                        validatorCompInfo.validatorComp.errorsDict = null;
                        validatorCompInfo.validatorComp.errors = validatorErrorsDict;
                    } else {
                        validatorCompInfo.validatorComp.errorsDict = validatorErrorsDict;
                        validatorCompInfo.validatorComp.errors = this.errorsDictToArray(validatorErrorsDict, validatorCompInfo.validatorName);
                    }
                } else {
                    validatorCompInfo.validatorComp.isValid = true;
                    validatorCompInfo.validatorComp.errorsDict = null;
                    validatorCompInfo.validatorComp.errors = null;
                }
            }
        });
    }

    private errorsDictToArray(errorsDict, errorsKey?: string): string[] {
        let errors: string[];
        if (!errorsDict) {
            errors = null;
        } else if (errorsDict instanceof Array) {
            errors = (errorsKey) ? errorsDict.map((err) => `${errorsKey}: ${err}`) : errorsDict;
        } else {
            errors = Object.keys(errorsDict).reduce((errorsAcc, eKey) => {
                const newErrorsKey = (errorsDict[eKey] instanceof Array) ? errorsKey : `${errorsKey}.${eKey}`;
                errorsAcc.push(...this.errorsDictToArray(errorsDict[eKey], newErrorsKey));
                return errorsAcc;
            }, []);
        }
        return (errors && errors.length) ? errors : null;
    }

    public reset() {
        this.validation.reset();
        this.syncValidatorComponentsAttributes();
    }

    public validate(value: any, opts?) {
        // validate the value
        this.validation.validate(value, opts);
    }
}
