import { Input, Component } from "@angular/core";
import { ValidatorComponent } from "./base.validator.component";
import { IValidator } from './validator.interface';
import template from "./base.validator.component.html";

@Component({
    selector: 'sdc-regex-validator',
    template: template
})
export class RegexValidatorComponent extends ValidatorComponent implements IValidator {

    @Input() public pattern: RegExp;

    constructor() {
        super();
    }

    public validate(value: any): boolean {
        const regexp = new RegExp(this.pattern);
        this.isValid = regexp.test(value);
        return this.isValid;
    }

}
