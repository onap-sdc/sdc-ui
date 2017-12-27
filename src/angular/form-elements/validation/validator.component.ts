import {
    ContentChild, Directive, EventEmitter, forwardRef, Input, OnChanges, OnDestroy, Output, SimpleChanges
} from "@angular/core";
import {AnonymousSubscription} from "rxjs/Subscription";
import {get as getObjectPath} from "lodash";
import {ValidatorTypes, IValidatorFunc, IValidationErrors} from "./validation.type";
import {ValidationComponent} from "./validation.component";
import {AbstractControl} from "@angular/forms";

@Directive({
    selector: 'sdc-validator',
})
export class ValidatorComponent implements OnChanges, OnDestroy {
    @Input() public type: ValidatorTypes;
    @Input() public name: string;
    @Input() public message: string|string[];
    @Input() public disabled: boolean = false;
    @Input() public stop: boolean = false;
    @Input() public getValue: (value: any) => any;
    @Input() public forPath: string|'*';

    @Input() public isChild: boolean;
    @Input() public patterns: Array<RegExp|string|string[]>;
    @Input() public callback: IValidatorFunc;
    @Input() public isError: boolean;
    @Input() public control: AbstractControl;
    @Input() public isManaged: boolean;
    @Input() public validationRef: ValidationComponent;

    @Output() public validatorChange: EventEmitter<ValidatorComponent> = new EventEmitter<ValidatorComponent>();

    @ContentChild(forwardRef(() => ValidationComponent)) public subValidationComp: ValidationComponent;

    private validatorFunc: IValidatorFunc;
    private validatorFuncDeps: Set<string>;

    private messages: string[];
    private regexPatterns: RegExp[];
    private controlChangeSubscription: AnonymousSubscription;
    private subValidationChangeSubscription: AnonymousSubscription;
    private refValidationChangeSubscription: AnonymousSubscription;

    constructor() {
        this.validatorFuncDeps = new Set();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.message) {
            this.messages = (this.message instanceof Array) ? this.message : [this.message];
        }

        if (changes.patterns) {
            this.regexPatterns = this.patterns.map<RegExp>((pattern) => {
                if (pattern instanceof RegExp) {
                    return pattern;
                } else if (pattern instanceof Array) {
                    if (pattern.length >= 2) {
                        return new RegExp(pattern[0], pattern[1]);
                    } else if (pattern.length === 1) {
                        return new RegExp(pattern[0]);
                    }
                    return new RegExp('');
                }
                return new RegExp(pattern);
            });
        }

        if (changes.type || changes.disabled || changes.control || changes.subValidationComp || changes.validationRef) {
            this.getValidatorFunc(true);
        } else if (Object.keys(changes).some((c) => this.validatorFuncDeps.has(c))) {
            this.emitValidatorChange();
        }
    }

    public ngOnDestroy() {
        this.cleanValidatorSubscriptions();
    }

    public cleanValidatorSubscriptions() {
        ['controlChangeSubscription', 'subValidationChangeSubscription', 'refValidationChangeSubscription']
            .forEach((subscriptionName) => {
                if (this[subscriptionName]) {
                    this[subscriptionName].unsubscribe();
                    delete this[subscriptionName];
                }
            });
    }

    public getValidatorFunc(forceNew: boolean = false): IValidatorFunc {
        if (!this.validatorFunc || forceNew) {
            const initialValidatorFunc: IValidatorFunc = (value) => null;
            this.validatorFunc = initialValidatorFunc;
            this.setValidatorFuncDeps(['type', 'disabled'], true);
            this.cleanValidatorSubscriptions();
            if (!this.disabled) {
                switch (this.type) {
                    case ValidatorTypes.CALLBACK:
                        this.validatorFunc = (value) => (this.callback(value))
                            ? null : this.messages;
                        this.setValidatorFuncDeps(['message', 'callback']);
                        break;

                    case ValidatorTypes.CUSTOM:
                        this.validatorFunc = (value) => this.callback(value);
                        this.setValidatorFuncDeps(['callback']);
                        break;

                    case ValidatorTypes.REQUIRED:
                        this.validatorFunc = (value) => (Boolean(value))
                            ? null : this.messages;
                        this.setValidatorFuncDeps(['message']);
                        break;

                    case ValidatorTypes.REGEX:
                        this.validatorFunc = (value) => (this.regexPatterns.every((pattern) => pattern.test(value)))
                            ? null : this.messages;
                        this.setValidatorFuncDeps(['message', 'patterns']);
                        break;

                    case ValidatorTypes.MANUAL:
                        this.validatorFunc = (value) => (!this.isError)
                            ? null : this.messages;
                        this.setValidatorFuncDeps(['message', 'isError']);
                        break;

                    case ValidatorTypes.CONTROL:
                        this.validatorFunc = (value) => {
                            if (!this.control) {
                                return null;
                            }
                            if (!this.isManaged) {
                                this.control.setValue(value);
                            }
                            return this.control.errors;
                        };
                        if (this.control && this.isManaged) {
                            this.controlChangeSubscription =
                                this.control.statusChanges.subscribe(
                                    () => this.emitValidatorChange());
                        }
                        this.setValidatorFuncDeps(['control', 'isManaged']);
                        break;

                    // case ValidatorTypes.ASYNC:
                    //     this.validatorFunc = (value) => this.callback.apply(null, value);
                    //     break;

                    case ValidatorTypes.VALIDATION:
                        this.validatorFunc = (value) => {
                            if (!this.subValidationComp) {
                                return null;
                            }
                            if (!this.isManaged) {
                                this.subValidationComp.value = value;
                                this.subValidationComp.validate();
                            }
                            return this.subValidationComp.control.errors;
                        };
                        if (this.validationRef) {
                            this.subValidationChangeSubscription =
                                this.subValidationComp.controlStatusChange.subscribe(
                                    () => this.emitValidatorChange());
                        }
                        this.setValidatorFuncDeps(['subValidationComp', 'isManaged']);
                        break;

                    case ValidatorTypes.REF:
                        this.validatorFunc = (value) => {
                            if (!this.validationRef) {
                                return null;
                            }
                            if (!this.isManaged) {
                                this.validationRef.value = value;
                                this.validationRef.validate();
                            }
                            return this.validationRef.control.errors;
                        };
                        if (this.validationRef) {
                            this.refValidationChangeSubscription =
                                this.validationRef.controlStatusChange.subscribe(
                                    () => this.emitValidatorChange());
                        }
                        this.setValidatorFuncDeps(['validationRef', 'isManaged']);
                        break;
                }
                if (this.validatorFunc !== initialValidatorFunc) {
                    this.validatorFunc = this.wrapValidatorFuncGetValue(this.validatorFunc);
                }
            }
            this.emitValidatorChange();
        }
        return this.validatorFunc;
    }

    private emitValidatorChange() {
        this.validatorChange.emit(this);
    }

    private wrapValidatorFuncGetValue(validatorFunc: IValidatorFunc): any {
        this.setValidatorFuncDeps(['getValue', 'forPath']);
        if (this.getValue) {
            return (value: any) => validatorFunc(this.getValue(value));
        } else if (this.forPath) {
            if (this.forPath === '*') {
                return (value: any) => {
                    if (!value) {
                        return null;
                    }
                    let isValid: boolean = true;
                    const errors: IValidationErrors = Object.keys(value).reduce((errorsAcc, key) => {
                        const valErrors = validatorFunc(value[key]);
                        if (valErrors) {
                            isValid = false;
                            errorsAcc[key] = valErrors;
                        }
                        return errorsAcc;
                    }, {} as IValidationErrors);
                    return (isValid) ? null : errors;
                };
            } else {
                return (value: any) => validatorFunc(getObjectPath(value, this.forPath));
            }
        }
        return validatorFunc;
    }

    private setValidatorFuncDeps(deps: string[], reset: boolean = false) {
        if (reset) {
            this.validatorFuncDeps = new Set();
        }
        deps.forEach((dep) => this.validatorFuncDeps.add(dep));
    }
}
