import {NgModule} from "@angular/core";
import {FormElementsModule} from "./form-elements/form-elements.module";
import {ButtonsModule} from "./buttons/buttons.module";
import {ModalModule} from "./modals/modal.module";
import {PopupMenuModule} from "./popup-menu/popup-menu.module";
import {AnimationDirectivesModule} from "./animations/animation-directives.module";
import {InfiniteScrollModule} from "./infinite-scroll/infinite-scroll.module";
import {TileModule} from "./tiles/tile.module";
import {ChecklistModule} from "./checklist/checklist.module";
import {SvgIconModule} from "./svg-icon/svg-icon.module";
import {AutoCompleteModule} from "./autocomplete/autocomplete.module";
import {FilterBarModule} from "./filterbar/filter-bar.module";
import {SearchBarModule} from "./searchbar/search-bar.module";
import {TooltipModule} from "./tooltip/tooltip.module";

@NgModule({
    imports: [
        AnimationDirectivesModule,
        ModalModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        InfiniteScrollModule,
        TileModule,
        ChecklistModule,
        AutoCompleteModule,
        FilterBarModule,
        SearchBarModule,
        TooltipModule,
        SvgIconModule
    ],
    exports: [
        AnimationDirectivesModule,
        ModalModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        InfiniteScrollModule,
        TileModule,
        ChecklistModule,
        AutoCompleteModule,
        FilterBarModule,
        SearchBarModule,
        TooltipModule,
        SvgIconModule
    ]
})
export class SdcUiComponentsModule {
}
