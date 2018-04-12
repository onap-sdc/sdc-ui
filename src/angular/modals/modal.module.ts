import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { ModalService } from "./modal.service";
import { CommonModule } from "@angular/common";
import { ButtonsModule } from "../buttons/buttons.module";
import { AnimationDirectivesModule } from "../animations/animation-directives.module";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { ModalCloseDirective } from "./modal-close.directive";
import { ModalButtonComponent } from "./modal-button.component";

@NgModule({
    declarations: [
        ModalComponent,
        ModalButtonComponent,
        ModalCloseDirective
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        AnimationDirectivesModule
    ],
    entryComponents: [
        ModalComponent
    ],
    exports: [ModalCloseDirective, ModalButtonComponent],
    providers: [CreateDynamicComponentService, ModalService]
})
export class ModalModule {

}
