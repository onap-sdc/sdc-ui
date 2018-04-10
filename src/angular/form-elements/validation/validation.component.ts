import { Input, Component, ContentChildren, EventEmitter, Output, QueryList, SimpleChanges, HostBinding, AfterContentInit } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
import { Subscribable } from "rxjs/Observable";
import { AnonymousSubscription } from "rxjs/Subscription";
import { IValidator } from './validators/validator.interface';
import { ValidatorComponent } from './validators/base.validator.component';
import { RegexValidatorComponent } from './validators/regex.validator.component';
import { RequiredValidatorComponent } from './validators/required.validator.component';
import template from "./validation.component.html";

@Component({
    selector: 'sdc-validation',
    template
})
export class ValidationComponent implements AfterContentInit {

    @Input() public disabled: boolean;
    @HostBinding('class') classes;

    // @ContentChildren does not recieve type any or IValidator or ValidatorComponent, so need to create @ContentChildren for each validator type.
    @ContentChildren(RegexValidatorComponent) public regexValidator: QueryList<ValidatorComponent>;
    @ContentChildren(RequiredValidatorComponent) public requireValidator: QueryList<ValidatorComponent>;

    private supportedValidator: Array<QueryList<ValidatorComponent>>;

    constructor() {
        this.disabled = false;
        this.classes = 'sdc-validation';
    }

    ngAfterContentInit(): void {
        this.supportedValidator = [
            this.regexValidator,
            this.requireValidator
        ];
    }

    public validate(value: any): boolean {

        /**
         * Iterate over all validators types (required, regex, etc...), and inside each iterate over
         * all validators with same type, and return boolean result true in case all validations passed.
         */
        const validationResult: boolean = this.supportedValidator.reduce((sum, validatorName) => {
            const response: boolean = validatorName.reduce((_sum, validator) => {
                return _sum && validator.validate(value);
            }, true);
            return sum && response;
        }, true);

        return validationResult;

    }

}
