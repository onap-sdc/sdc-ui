import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";
import {ButtonModalExample} from "./components/button-modal-example.component";
import {ModalModule} from "../../src/angular/modals/modal.module";
import {InnerContent} from "./components/inner-content-example.component";
import {PopupMenuModule} from "../../src/angular/popup-menu/popup-menu.module";
import {SearchBarModule} from "../../src/angular/searchbox/search-bar.module";
import {InfiniteScrollModule} from "../../src/angular/infinite-scroll/infinite-scroll.module";
import {SearchFilterPipe} from "./utils/pipes/search.pipe";
import {SearchBarExample} from "./components/search-bar-example.component";

@NgModule({
    declarations: [
        ColorsTable,
        InnerContent,
        ButtonModalExample,
        SearchBarExample,
        KeysPipe,
        SearchFilterPipe
    ],
    imports: [
        ModalModule,
        CommonModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        SearchBarModule,
        InfiniteScrollModule
    ],
    entryComponents: [InnerContent],
    exports: [
        CommonModule,
        InnerContent,
        ModalModule,
        ColorsTable,
        ButtonModalExample,
        SearchBarExample,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        SearchBarModule,
        InfiniteScrollModule
    ],
    providers: [KeysPipe, SearchFilterPipe]
})
export class ComponentsModule {
}
