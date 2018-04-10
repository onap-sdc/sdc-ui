import { Input, Component } from "@angular/core";
import { ValidatorComponent } from "./base.validator.component";
import { IValidator } from './validator.interface';
import template from "./base.validator.component.html";

@Component({
    selector: 'sdc-custom-validator',
    template: template
})
export class CustomValidatorComponent extends ValidatorComponent implements IValidator {

    @Input() public callback: () => boolean;

    constructor() {
        super();
    }

    public validate(value: any): boolean {
        this.isValid = this.callback();
        return this.isValid;
    }

}
