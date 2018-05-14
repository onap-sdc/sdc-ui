import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SdcUiComponentsModule } from "../../src/angular";
import { KeysPipe } from "./utils/pipes/keys.pipe";
import { SearchFilterPipe } from "./pipes/search-filter-pipe";
import { ColorsTable } from "./components/colors-table.component";
import { ModalInnerContent } from "./components/modal-inner-content-example.component";
import { ModalConsumer } from "./components/modal-consumer.component";
import { SvgIconsTableComponent } from "./components/svg-icons-table.component";
import { NotificationsExample } from "./components/notifications-example.component";
import { Mode, Placement, Size } from "./../../src/angular/common/enums";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        ModalInnerContent,
        ModalConsumer,
        SearchFilterPipe,
        SvgIconsTableComponent,
        NotificationsExample
    ],
    imports: [
        CommonModule,
        FormsModule,
        SdcUiComponentsModule
    ],
    exports: [
        CommonModule,
        SdcUiComponentsModule,
        ModalInnerContent,
        NotificationsExample,
        ColorsTable,
        SvgIconsTableComponent,
        ModalConsumer,
        SearchFilterPipe
    ],
    entryComponents: [
        ModalInnerContent
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
