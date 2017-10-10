/**
 * Created by rc2122 on 9/5/2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {FormElementBase} from "./form-base.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";

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
        FormElementBase
    ],
    exports: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent

    ]
})
export class FormElementsModule {
}
