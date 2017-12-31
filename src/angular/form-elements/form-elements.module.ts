import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import { AnimationDirectivesModule } from '../animations/animation-directives.module';
import {DropDownTriggerDirective} from "./dropdown/dropdown-trigger.directive";
import {TagItemComponent} from "./tag-cloud/tag-item/tag-item.component";
import {TagCloudComponent} from "./tag-cloud/tag-cloud.component";

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
        TagItemComponent,
        TagCloudComponent,
        DropDownTriggerDirective
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        TagCloudComponent
    ]
})
export class FormElementsModule {
}
