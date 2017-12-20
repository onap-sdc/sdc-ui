import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import {DropDownTriggerDirective} from "./dropdown/dropdown-trigger.directive";
import {ValidationComponent, ValidatorComponent} from "./validation/validation.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],

    declarations: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        CheckboxComponent,
        DropDownTriggerDirective,
        ValidationComponent,
        ValidatorComponent
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        ValidationComponent,
        ValidatorComponent
    ]
})
export class FormElementsModule {
}
