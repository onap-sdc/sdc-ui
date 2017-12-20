import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {TileModule} from "../../src/angular/tiles/tile.module";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {ModalInnerContent} from "./components/modal-inner-content-example.component";
import {PopupMenuModule} from "../../src/angular/popup-menu/popup-menu.module";
import {ChecklistModule} from "../../src/angular/checklist/checklist.module";
import {InfiniteScrollModule} from "../../src/angular/infinite-scroll/infinite-scroll.module";
import {TooltipDirective} from '../../src/angular/tooltip/tooltip.directive';
import {TooltipModule} from '../../src/angular/tooltip/tooltip.module';
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
        FormsModule,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        TooltipModule,
        PopupMenuModule,
        InfiniteScrollModule
    ],
    entryComponents: [ModalInnerContent],
    exports: [
        CommonModule,
        FormsModule,
        ModalInnerContent,
        ModalModule,
        ColorsTable,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        TooltipDirective,
        PopupMenuModule,
        InfiniteScrollModule,
        ModalConsumer
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
