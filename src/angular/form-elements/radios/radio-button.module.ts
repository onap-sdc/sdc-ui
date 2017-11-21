import {NgModule} from "@angular/core";
import {RadioButtonsComponent} from "./radio-button.component";
import {RadioGroupComponent} from "./radio-group-buttons.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        RadioButtonsComponent,
        RadioGroupComponent
    ],
    imports:[CommonModule],
    exports: [
        RadioButtonsComponent,
        RadioGroupComponent
    ]
})

export class RadioButtonsModule {

}
