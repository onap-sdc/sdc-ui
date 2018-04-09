import { Input, Component, ContentChildren, EventEmitter, Output, QueryList, SimpleChanges, HostBinding } from "@angular/core";
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
export class ValidationComponent {

    @Input() public disabled: boolean;
    @HostBinding('class') classes;

    // @ContentChildren does not recieve type any or IValidator or ValidatorComponent, so need to create @ContentChildren for each validator.
    @ContentChildren(RegexValidatorComponent) public regexValidator: QueryList<ValidatorComponent>;
    @ContentChildren(RequiredValidatorComponent) public requireValidator: QueryList<ValidatorComponent>;

    constructor() {
        this.disabled = false;
        this.classes = 'sdc-validation';
    }

    public validate(value: any) {

        this.regexValidator.forEach((validator: IValidator) => {
            validator.validate(value);
        });

        this.requireValidator.forEach((validator: IValidator) => {
            validator.validate(value);
        });

    }

}
