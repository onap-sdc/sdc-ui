import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SdcUiComponentsModule } from "../../src/angular";
import { KeysPipe } from "./utils/pipes/keys.pipe";
import { CommonModule } from "@angular/common";
import { ColorsTable } from "./components/colors-table.component";
import { ModalInnerContent } from "./components/modal-inner-content-example.component";
import { ModalConsumer } from "./components/modal-consumer.component";
import { SearchFilterPipe } from "./pipes/search-filter-pipe";
import { SvgIconsTableComponent } from "./components/svg-icons-table.component";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        ModalInnerContent,
        ModalConsumer,
        SearchFilterPipe,
        SvgIconsTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SdcUiComponentsModule
    ],
    // entryComponents: [ModalInnerContent],
    exports: [
        CommonModule,
        SdcUiComponentsModule,
        ModalInnerContent,
        ColorsTable,
        SvgIconsTableComponent,
        ModalConsumer,
        SearchFilterPipe
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {
}
