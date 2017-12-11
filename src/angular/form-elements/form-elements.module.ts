import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import {DropDownGroupComponent} from "./dropdown/dropdown-group.component";

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
        DropDownGroupComponent
    ],
    exports: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent
    ]
})
export class FormElementsModule {
}
