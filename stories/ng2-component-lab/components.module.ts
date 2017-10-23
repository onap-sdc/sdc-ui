import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {ButtonModal} from "./components/button-modal.component";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {InnerContent} from "./components/inner-content.component";

@NgModule({
    declarations: [
        ColorsTable,
        InnerContent,
        ButtonModal,
        KeysPipe
    ],
    imports: [
        ModalModule,
        CommonModule,
        FormElementsModule,
        ButtonsModule
    ],
    entryComponents: [InnerContent],
    exports: [
        InnerContent,
        ModalModule,
        ColorsTable,
        ButtonModal,
        FormElementsModule,
        ButtonsModule
    ],
    providers: [KeysPipe]
})

export class ComponentsModule {

    constructor() {
    }
}
