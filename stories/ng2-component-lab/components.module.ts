import {NgModule, Injector} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {ColorsTable} from "./components/colors-table.component";
import {FontIconsShowcaseComponent} from "./components/font-icons-showcase.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {ButtonModalExample} from "./components/button-modal-example.component";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {InnerContent} from "./components/inner-content-example.component";

@NgModule({
    declarations: [
        ColorsTable,
        InnerContent,
        ButtonModalExample,
        KeysPipe,
        FontIconsShowcaseComponent
    ],
    imports: [
        ModalModule,
        CommonModule,
        FormsModule,
        FormElementsModule,
        ButtonsModule
    ],
    entryComponents: [InnerContent],
    exports: [
        InnerContent,
        ModalModule,
        ColorsTable,
        ButtonModalExample,
        FontIconsShowcaseComponent,
        FormElementsModule,
        ButtonsModule
    ],
    providers: [KeysPipe]
})

export class ComponentsModule {

    constructor() {
    }
}
