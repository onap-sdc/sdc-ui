import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {isEqual} from "lodash";
import {ValidatorTypes, IValidator} from "./model";
import template from "./validator.component.html";
import {IValidationErrorsDict} from "./model/validation.type";

@Component({
    selector: 'sdc-validator',
    template
})
export class ValidatorComponent implements OnChanges {
    @Input() public name: string;
    @Input() public type: ValidatorTypes;
    @Input() public message: string;
    @Input() public stop: boolean = false;
    @Input() public patterns: Array<RegExp|string|string[]>;
    @Input() public callback: (value: any) => string|string[]|null;
    @Input() public isError: boolean;
    @Output() public validatorChange: EventEmitter<IValidator> = new EventEmitter<IValidator>();
    public isValid: boolean;
    public errorsDict: IValidationErrorsDict;
    public errors: string[]|null;
    private validator: IValidator;

    constructor() {
        this.isValid = true;
        this.errors = null;
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.getValidator(true);
    }

    public getValidator(forceNew: boolean = false): IValidator {
        if (!this.validator || forceNew) {
            const validator: IValidator = {
                type: this.type,
                name: this.name,
                message: this.message || `[${this.name}] Validation error`,
                stop: this.stop
            };

            switch (validator.type) {
                case ValidatorTypes.REGEX:
                    validator.patterns = this.patterns.map<RegExp>((pattern) => {
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
                    break;
                case ValidatorTypes.CUSTOM:
                    validator.callback = this.callback;
                    break;
                case ValidatorTypes.MANUAL:
                    validator.isError = this.isError;
                    break;
            }

            if (!isEqual(this.validator, validator)) {
                this.validator = validator;
                this.validatorChange.emit(this.validator);
            }
        }
        return this.validator;
    }
}
