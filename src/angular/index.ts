import {NgModule} from "@angular/core";
import {FormElementsModule} from "./form-elements/form-elements.module";
import {ButtonsModule} from "./buttons/buttons.module";
import {ModalModule} from "./modals/modal.module";
import {NotificationModule} from "./notifications/notification.module";
import {PopupMenuModule} from "./popup-menu/popup-menu.module";
import {AnimationDirectivesModule} from "./animations/animation-directives.module";
import {InfiniteScrollModule} from "./infinite-scroll/infinite-scroll.module";
import {TileModule} from "./tiles/tile.module";
import {ChecklistModule} from "./checklist/checklist.module";
import { TagCloudModule } from './tag-cloud/tag-cloud.module';
import { TabsModule } from "./tabs/tabs.module";

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
        TagCloudModule,
        TabsModule
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
        TagCloudModule,
        TabsModule
    ]
})
export class SdcUiComponentsModule {
}

export {SdcUiComponentsNg1Module} from './ng1.module';

import * as SdcUiComponents from './components';
export {SdcUiComponents};
