import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ListItemComponent} from "./list/list-item/list-item.component";
import {ListComponent} from "./list/list.component";

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
        ListComponent
    ],
    exports: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        ListComponent

    ]
})
export class FormElementsModule {
}
