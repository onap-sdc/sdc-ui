import {Component, Input, HostListener, EventEmitter, Output} from "@angular/core";
import { ButtonComponent } from "../buttons/button.component";
import template from "./../buttons/button.component.html";

@Component({
    selector: "sdc-modal-button",
    template: template
})
export class ModalButtonComponent extends ButtonComponent {

    @Input() public id?: string;
    @Input() public callback: Function;
    @Input() public closeModal: boolean;
    @Output() closeModalEvent: EventEmitter<any> = new EventEmitter<any>();
    @HostListener('click') invokeCallback = (): void => {
        if (this.callback) {
            this.callback();
        }
        if (this.closeModal) {
            this.closeModalEvent.emit();
        }
    }

    constructor() {
        super();
        this.closeModal = false;
    }

}
