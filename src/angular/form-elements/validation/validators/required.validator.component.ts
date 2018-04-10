import { Input, Component } from "@angular/core";
import { ValidatorComponent } from "./base.validator.component";
import { IValidator } from './validator.interface';
import template from "./base.validator.component.html";

@Component({
    selector: 'sdc-required-validator',
    template: template
})
export class RequiredValidatorComponent extends ValidatorComponent implements IValidator {

    constructor() {
        super();
    }

    public validate(value: any): boolean {
        if (value) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
        return this.isValid;
    }

}
