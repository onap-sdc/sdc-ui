import { Component, Input, HostListener } from "@angular/core";
import { ButtonComponent } from "../buttons/button.component";
import { ModalService } from "./modal.service";
import template from "./../buttons/button.component.html";

@Component({
    selector: "sdc-modal-button",
    template: template
})
export class ModalButtonComponent extends ButtonComponent {

    @Input() public id?: string;
    @Input() public callback: Function;
    @Input() public closeModal: boolean;
    @HostListener('click') invokeCallback = (): void => {
        if (this.callback) {
            this.callback();
        }
        if (this.closeModal) {
            this.modalService.closeModal();
        }
    }

    constructor(private modalService: ModalService) {
        super();
        this.closeModal = false;
    }

}
