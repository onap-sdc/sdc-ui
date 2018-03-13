import { Component, Input} from "@angular/core";
import { ButtonComponent } from "../buttons/button.component";
import { ModalService } from "./modal.service";
import template from "./modal-button.component.html";

@Component({
    selector: "sdc-modal-button",
    template
})
export class ModalButtonComponent extends ButtonComponent {
    @Input() public callback: () => any;
    @Input() public closeModal: boolean = false;

    constructor(private modalService: ModalService) {
        super();
    }

    public invokeCallback = (): void => {
        if (this.callback) {
            this.callback();
        }
        if (this.closeModal) {
            this.modalService.closeModal();
        }
    }
}
