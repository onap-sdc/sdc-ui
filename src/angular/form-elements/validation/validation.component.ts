import {
    AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList,
    SimpleChanges
} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";
import {Subscribable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";
import {ValidatorComponent} from "./validator.component";
import template from "./validation.component.html";

export * from "./validation.type";
export {ValidatorComponent};

interface IValidatorCompInfo {
    validatorComp: ValidatorComponent;
    validatorChangeSubscription: AnonymousSubscription;
}

@Component({
    selector: 'sdc-validation',
    template
})
export class ValidationComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
    @Input() public value: any;
    @Input() public valueEmitter: Subscribable<any>;

    @Input() public manage: boolean;
    @Input() public disabled: boolean;
    @Input() public show: boolean;

    @Output() public controlStatusChange: EventEmitter<ValidationComponent> = new EventEmitter<ValidationComponent>();

    @ContentChildren(ValidatorComponent) public validatorsComps: QueryList<ValidatorComponent>;

    public validationMetaProp = ValidationComponent.VALIDATION_META_PROP;

    protected stopIndex: number;
    private valueSubscription: AnonymousSubscription;
    private validationValueSubscription: AnonymousSubscription;
    private validatorCompInfoArray: IValidatorCompInfo[];
    private syncValidateTimeout: number;
    private formControl: FormControl;

    constructor() {
        this.manage = true;
        this.disabled = false;
        this.show = true;
        this.validatorCompInfoArray = [];
        this.formControl = new FormControl();
    }

    public get control(): FormControl {
        return this.formControl;
    }

    public static get VALIDATION_META_PROP() {
        return '_validationMeta';
    }

    public ngOnInit() {
        this.validationValueSubscription =
            this.formControl.valueChanges.subscribe(() => {
                this.controlStatusChange.emit(this);
            });
    }

    public ngOnDestroy() {
        if (this.validationValueSubscription) {
            this.validationValueSubscription.unsubscribe();
            delete this.validationValueSubscription;
        }
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
                        this.validate();
                    });
                });
            }
        }

        // new value is assigned
        if (changes.value) {
            this.validate();
        }

        // enable/disable
        if (changes.disabled) {
            (this.disabled) ? this.formControl.disable() : this.formControl.enable();
        }
    }

    public ngAfterContentInit() {
        this.formControl.setValidators(this.runValidation.bind(this));

        this.syncValidators();
        this.validatorsComps.changes.subscribe(() => this.syncValidators());
    }

    protected runValidation(control: AbstractControl) {
        const value = control.value;
        this.stopIndex = null;
        const errors = {};
        let isValid: boolean = true;
        const validationMeta = {
            order: [],
            children: []
        };

        // run validators:
        this.validatorsComps.toArray().every((validatorComp, idx) => {
            const validatorName = validatorComp.name || String(idx);
            const validatorFunc = validatorComp.getValidatorFunc();
            const validatorErrors = validatorFunc(value);  // run validator
            if (validatorErrors) {
                isValid = false;
                errors[validatorName] = validatorErrors;

                // add validation meta data
                validationMeta.order.push(validatorName);
                if (validatorComp.isChild) {
                    validationMeta.children.push(validatorName);
                }

                // stop the validators loop
                if (validatorComp.stop) {
                    this.stopIndex = idx;
                    return false;
                }
            }
            return true;
        });

        if (!isValid) {
            // add reflect property to errors to get validation meta
            Reflect.defineProperty(errors, this.validationMetaProp, {get: () => validationMeta});

            return errors;
        }
        return null;
    }

    protected syncValidators() {
        // make new validators array
        const newValidatorsCompInfoArray: IValidatorCompInfo[] = [];
        this.validatorsComps.forEach((validatorComp) => {
            // make validator subscription and push to validators array
            const validatorCompInfoIdx = this.validatorCompInfoArray.findIndex(
                (vci) => vci.validatorComp === validatorComp);
            let validatorCompInfo: IValidatorCompInfo;
            if (validatorCompInfoIdx !== -1) {
                // remove the validator comp info from the array, so validators comp info array ends with removed info
                validatorCompInfo = this.validatorCompInfoArray.splice(validatorCompInfoIdx, 1)[0];
            } else {
                // make a new validator comp info
                validatorCompInfo = {
                    validatorComp,
                    validatorChangeSubscription:
                        validatorComp.validatorChange.subscribe(() => this.syncSingleValidator(validatorComp))
                };
            }
            newValidatorsCompInfoArray.push(validatorCompInfo);
        });

        // unsubscribe to the removed validators
        this.validatorCompInfoArray.forEach((vci) => {
            vci.validatorChangeSubscription.unsubscribe();
        });

        // keep new validators info array
        this.validatorCompInfoArray = newValidatorsCompInfoArray;

        this.syncValidate();
    }

    protected syncSingleValidator(validatorComp: ValidatorComponent) {
        // if stopped at some index, and the validator comp is above that index, then do nothing
        if (this.stopIndex !== null) {
            const validatorCompInfoIdx = this.validatorCompInfoArray.findIndex(
                (vci) => vci.validatorComp === validatorComp);
            if (validatorCompInfoIdx === -1 || validatorCompInfoIdx > this.stopIndex) {
                return;
            }
        }
        this.syncValidate();
    }

    public syncValidate() {
        // sync validate can be triggered from many children, so delay validate with timeout
        if (!this.syncValidateTimeout) {
            this.syncValidateTimeout = setTimeout(() => this.validate());
        }
    }

    public validate() {
        // once validate, clear sync validate timeout
        if (this.syncValidateTimeout) {
            clearTimeout(this.syncValidateTimeout);
            delete this.syncValidateTimeout;
        }

        // validate the current value only if manage
        if (this.manage) {
            this.formControl.setValue(this.value);
        }
    }
}
