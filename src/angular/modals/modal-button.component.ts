import { Component, Input} from "@angular/core";
import { ButtonComponent } from "../buttons/button.component";
import { ModalService } from "./modal.service";
import template from "./modal-button.component.html";

@Component({
    selector: "sdc-modal-button",
    template: template
})
export class ModalButtonComponent extends ButtonComponent {

    @Input() public callback: Function;
    @Input() public closeModal: boolean;

    constructor(private modalService: ModalService) {
        super();
        this.closeModal = false;
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
