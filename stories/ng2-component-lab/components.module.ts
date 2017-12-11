import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {TileModule} from "../../src/angular/tiles/tile.module";
import {ButtonModalExample} from "./components/button-modal-example.component";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {InnerContent} from "./components/inner-content-example.component";
import {PopupMenuModule} from "../../src/angular/popup-menu/popup-menu.module";
import {ChecklistModule} from "../../src/angular/checklist/checklist.module";
import {InfiniteScrollModule} from "../../src/angular/infinite-scroll/infinite-scroll.module";
import {TooltipDirective} from '../../src/angular/tooltip/tooltip.directive';
import {TooltipTemplateComponent} from '../../src/angular/tooltip/tooltip-template.component';
import {TooltipModule} from '../../src/angular/tooltip/tooltip.module';

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
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        TooltipModule,
        PopupMenuModule,
        InfiniteScrollModule
    ],
    entryComponents: [InnerContent],
    exports: [
        CommonModule,
        InnerContent,
        ModalModule,
        ColorsTable,
        ButtonModalExample,
        FormElementsModule,
        ButtonsModule,
        TileModule,
        ButtonsModule,
        ChecklistModule,
        PopupMenuModule,
        TooltipDirective,
        PopupMenuModule,
        InfiniteScrollModule
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
