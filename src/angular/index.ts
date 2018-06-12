import { NgModule } from "@angular/core";
import { FormElementsModule } from "./form-elements/form-elements.module";
import { ButtonsModule } from "./buttons/buttons.module";
import { ModalModule } from "./modals/modal.module";
import { NotificationModule } from "./notifications/notification.module";
import { PopupMenuModule } from "./popup-menu/popup-menu.module";
import { AnimationDirectivesModule } from "./animations/animation-directives.module";
import { InfiniteScrollModule } from "./infinite-scroll/infinite-scroll.module";
import { TileModule } from "./tiles/tile.module";
import { ChecklistModule } from "./checklist/checklist.module";
import { SvgIconModule } from "./svg-icon/svg-icon.module";
import { AutoCompleteModule } from "./autocomplete/autocomplete.module";
import { FilterBarModule } from "./filterbar/filter-bar.module";
import { SearchBarModule } from "./searchbar/search-bar.module";
import { TooltipModule } from "./tooltip/tooltip.module";
import { TagCloudModule } from './tag-cloud/tag-cloud.module';
import { TabsModule } from "./tabs/tabs.module";
import { LoaderModule } from "./loader/loader.module";
import { AccordionModule } from "./accordion/accordion.module";
import { MultilineEllipsisModule } from "./multiline-ellipsis/multiline-ellipsis.module";

@NgModule({
    imports: [
        AnimationDirectivesModule,
        ModalModule,
        NotificationModule,
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
        SvgIconModule,
        TagCloudModule,
        TabsModule,
        LoaderModule,
        AccordionModule,
        MultilineEllipsisModule
    ],
    exports: [
        AnimationDirectivesModule,
        ModalModule,
        NotificationModule,
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
        SvgIconModule,
        TagCloudModule,
        TabsModule,
        LoaderModule,
        AccordionModule,
        MultilineEllipsisModule
    ]
})
export class SdcUiComponentsModule {
}

import * as SdcUiComponents from './components';
import * as SdcUiCommon from './common/index';

export { SdcUiComponentsNg1Module } from './ng1.module';
export { SdcUiComponents };
export { SdcUiCommon };
