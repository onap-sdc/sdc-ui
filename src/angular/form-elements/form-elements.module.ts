import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./text-elements/input/input.component";
import { DropDownComponent } from "./dropdown/dropdown.component";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import { AnimationDirectivesModule } from '../animations/animation-directives.module';
import { DropDownTriggerDirective } from "./dropdown/dropdown-trigger.directive";
import {SvgIconModule} from "../svg-icon/svg-icon.module";
import { ValidationModule } from './validation/validation.module';
import {TextareaComponent} from "./text-elements/textarea/textarea.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AnimationDirectivesModule,
        SvgIconModule
    ],
    declarations: [
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        DropDownTriggerDirective,
        TextareaComponent
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        RadioGroupComponent,
        ValidationModule,
        TextareaComponent
    ]
})
export class FormElementsModule {
}
