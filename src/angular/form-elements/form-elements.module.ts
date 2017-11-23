import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {DropDownGroupComponent} from "./dropdown/dropdown-group.component";
import {DropDownTriggerDirective} from "./dropdown/dropdown-trigger.directive";

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
        DropDownGroupComponent,
        DropDownTriggerDirective
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent

    ]
})
export class FormElementsModule {
}
