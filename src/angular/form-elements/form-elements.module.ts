import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {DropDownComponent} from "./dropdown/dropdown.component";
import {CommonModule} from "@angular/common";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {FileOpenerComponent} from "./browse/file-opener/file-opener.component";
import { RadioGroupComponent } from "./radios/radio-buttons-group.component";
import {BrowseComponent} from "./browse/browse.component";
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
        FileOpenerComponent,
        RadioGroupComponent,
        BrowseComponent,
        TagItemComponent,
        TagCloudComponent,
        DropDownTriggerDirective
    ],
    exports: [
        DropDownComponent,
        DropDownTriggerDirective,
        InputComponent,
        CheckboxComponent,
        BrowseComponent,
        RadioGroupComponent,
        TagCloudComponent
    ]
})
export class FormElementsModule {
}
