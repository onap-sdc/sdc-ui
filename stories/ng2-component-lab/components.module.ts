import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {TileModule} from "../../src/angular/tiles/tile.module";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {ModalInnerContent} from "./components/modal-inner-content-example.component";
import {PopupMenuModule} from "../../src/angular/popup-menu/popup-menu.module";
import {ChecklistModule} from "../../src/angular/checklist/checklist.module";
import {InfiniteScrollModule} from "../../src/angular/infinite-scroll/infinite-scroll.module";
import {ModalConsumer} from "./components/modal-consumer.component";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        ModalInnerContent,
        ModalConsumer
    ],
    imports: [
        ModalModule,
        CommonModule,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        InfiniteScrollModule
    ],
    entryComponents: [ModalInnerContent],
    exports: [
        CommonModule,
        ModalInnerContent,
        ModalModule,
        ColorsTable,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        InfiniteScrollModule,
        ModalConsumer
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
