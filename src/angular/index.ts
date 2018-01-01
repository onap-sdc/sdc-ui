import {NgModule} from "@angular/core";
import {FormElementsModule} from "./form-elements/form-elements.module";
import {ButtonsModule} from "./buttons/buttons.module";
import {ModalModule} from "./modals/modal.module";
import {NotificationModule} from "./notifications/notification.module";
import {PopupMenuModule} from "./popup-menu/popup-menu.module";
import {InfiniteScrollModule} from "./infinite-scroll/infinite-scroll.module";
import {TileModule} from "./tiles/tile.module";
import {ChecklistModule} from "./checklist/checklist.module";

@NgModule({
    imports: [
        ModalModule,
        NotificationModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        InfiniteScrollModule,
        TileModule,
        ChecklistModule
    ],
    exports: [
        ModalModule,
        NotificationModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        InfiniteScrollModule,
        TileModule,
        ChecklistModule
    ]
})
export class SdcUiComponentsModule {
}
