import {NgModule} from "@angular/core";
import {ModalComponent} from "./modal.component";
import {ModalService} from "./modal.service";
import {CommonModule} from "@angular/common";
import {ButtonsModule} from "../buttons/buttons.module";
import {CreateDynamicComponentService} from "../utils/create-dynamic-component.service";

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule
    ],
    entryComponents: [
        ModalComponent
    ],
    exports: [],
    providers: [CreateDynamicComponentService, ModalService]
})
export class ModalModule {

}
