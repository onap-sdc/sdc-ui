import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import { AnimationDirectivesModule } from '../animations/animation-directives.module';
import {DropDownTriggerDirective} from "./dropdown/dropdown-trigger.directive";
import {ListItemComponent} from "./list/list-item/list-item.component";
import {ListComponent} from "./list/list.component";
import {ValidationComponent, ValidatorComponent} from "./validation/validation.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AnimationDirectivesModule
    ],

    declarations: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        DropDownTriggerDirective,
        ListItemComponent,
        ListComponent,
        ValidationComponent,
        ValidatorComponent
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        ListComponent,
        ListItemComponent,
        ValidationComponent,
        ValidatorComponent
    ]
})
export class FormElementsModule {
}
