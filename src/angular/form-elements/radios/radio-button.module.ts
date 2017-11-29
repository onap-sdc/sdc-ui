import {NgModule} from "@angular/core";
import {RadioButtonComponent} from "./radio-button.component";
import {RadioGroupComponent} from "./radio-group-buttons.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        RadioButtonComponent,
        RadioGroupComponent
    ],
    imports:[CommonModule],
    exports: [
        RadioButtonComponent,
        RadioGroupComponent
    ]
})

export class RadioButtonsModule {

}
