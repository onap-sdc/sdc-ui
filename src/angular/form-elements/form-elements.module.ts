import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import {ValidationDirective} from "./input/validation.directive";

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
        ValidationDirective,
        CheckboxComponent,
        RadioGroupComponent
    ],
    exports: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        ValidationDirective,
        CheckboxComponent,
        RadioGroupComponent
    ]
})
export class FormElementsModule {
}
