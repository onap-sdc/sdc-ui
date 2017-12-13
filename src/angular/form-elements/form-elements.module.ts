import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {FileOpenerComponent} from "./browse/file-opener/file-opener.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import {BrowseComponent} from "./browse/browse.component";
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
        FileOpenerComponent,
        RadioGroupComponent,
        BrowseComponent,
        DropDownTriggerDirective
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        BrowseComponent,
        RadioGroupComponent
    ]
})
export class FormElementsModule {
}
