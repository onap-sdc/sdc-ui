import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ListItemComponent} from "./list/list-item/list-item.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import {ListComponent} from "./list/list.component";
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
        ListItemComponent,
        RadioGroupComponent,
        ListComponent,
        DropDownTriggerDirective
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        ListComponent,
        RadioGroupComponent
    ]
})
export class FormElementsModule {
}
