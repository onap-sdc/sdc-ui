import { NgModule, Injector } from "@angular/core";
import { KeysPipe } from "./utils/pipes/keys.pipe";
import { CommonModule } from "@angular/common";
import { ColorsTable } from "./components/colors-table.component";
import { FormElementsModule } from "../../src/angular/form-elements/form-elements.module";
import { ButtonsModule } from "../../src/angular/buttons/buttons.module";
import { TileModule } from "../../src/angular/tiles/tile.module";
import { ModalModule } from "../../src/angular/modals/modal.module";
import { ModalInnerContent } from "./components/modal-inner-content-example.component";
import { PopupMenuModule } from "../../src/angular/popup-menu/popup-menu.module";
import { ChecklistModule } from "../../src/angular/checklist/checklist.module";
import { InfiniteScrollModule } from "../../src/angular/infinite-scroll/infinite-scroll.module";
import { TooltipDirective } from '../../src/angular/tooltip/tooltip.directive';
import { TooltipTemplateComponent } from '../../src/angular/tooltip/tooltip-template.component';
import { TooltipModule } from '../../src/angular/tooltip/tooltip.module';
import { ModalConsumer } from "./components/modal-consumer.component";
import { FilterBarModule } from "../../src/angular/filterbar/filter-bar.module";
import { SearchBarModule } from "../../src/angular/searchbar/search-bar.module";
import { SearchFilterPipe } from "./pipes/search-filter-pipe";
import { AutoCompleteModule } from "../../src/angular/autocomplete/autocomplete.module";
import {IconsModule} from "../../src/angular/icons/icons.module";


@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        ModalInnerContent,
        ModalConsumer,
        KeysPipe,
        SearchFilterPipe
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
        FilterBarModule,
        SearchBarModule,
        InfiniteScrollModule,
        TooltipModule,
        PopupMenuModule,
        InfiniteScrollModule,
        IconsModule
        AutoCompleteModule
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
        FilterBarModule,
        SearchBarModule,
        InfiniteScrollModule,
        AutoCompleteModule,
        TooltipDirective,
        PopupMenuModule,
        InfiniteScrollModule,
        ModalConsumer,
        IconsModule
        SearchFilterPipe
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
