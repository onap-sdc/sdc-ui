import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {ButtonModalExample} from "./components/button-modal-example.component";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {InnerContent} from "./components/inner-content-example.component";
import {PopupMenuModule} from "../../src/angular/popup-menu/popup-menu.module";
import {TileModule} from "../../lib/angular/tiles/tile.module";

@NgModule({
    declarations: [
        ColorsTable,
        InnerContent,
        ButtonModalExample,
        KeysPipe
    ],
    imports: [
        ModalModule,
        CommonModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        TileModule
    ],
    entryComponents: [InnerContent],
    exports: [
        InnerContent,
        ModalModule,
        ColorsTable,
        ButtonModalExample,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        TileModule
    ],
    providers: [KeysPipe]
})

export class ComponentsModule {

    constructor() {
    }
}
