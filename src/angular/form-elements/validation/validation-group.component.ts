import { Input, Component, ContentChildren, EventEmitter, Output, QueryList, SimpleChanges, HostBinding, AfterContentInit } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
import { Subscribable } from "rxjs/Observable";
import { AnonymousSubscription } from "rxjs/Subscription";
import { IValidator } from './validators/validator.interface';
import { ValidatorComponent } from './validators/base.validator.component';
import { RegexValidatorComponent } from './validators/regex.validator.component';
import { RequiredValidatorComponent } from './validators/required.validator.component';
import { ValidatableComponent } from './validatable.component';
import { ValidationComponent } from './validation.component';
import { CustomValidatorComponent } from './validators/custom.validator.component';
import template from "./validation.component.html";

@Component({
    selector: 'sdc-validation-group',
    template
})
export class ValidationGroupComponent implements AfterContentInit {

    @Input() public disabled: boolean;
    @HostBinding('class') classes;

    @ContentChildren(ValidationComponent) public validationsComponents: QueryList<ValidationComponent>;

    private supportedValidator: Array<QueryList<ValidatorComponent>>;

    constructor() {
        this.disabled = false;
        this.classes = 'sdc-validation-group';
    }

    ngAfterContentInit(): void {

    }

    public validate(): boolean {
        let validationResult = true;
        // Iterate over all validationComponent inside the group and return boolean result true in case all validations passed.
        this.validationsComponents.forEach((validationComponent) => {
            if (validationComponent.validate()) {
                validationResult = false;
            }
        });
        return validationResult;
    }

}
