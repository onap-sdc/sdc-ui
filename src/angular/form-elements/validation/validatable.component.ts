import { Input, Component } from "@angular/core";
import { ValidationComponent } from './validation.component';

export class ValidatableComponent {

    // Each ValidatableComponent should handle the style in case of error, according to this boolean
    protected valid = true;

    // Refernce to validation component, and activate validation for this input.
    @Input() public validation: ValidationComponent;

    // Each ValidatableComponent should call the validate function.
    public validate(value: string): void {
        if (this.validation) {
            this.valid = this.validation.validate(value);
        }
    }

}
