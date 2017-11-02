import {Directive, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ModalService} from "./modal.service";
import {IModalButtonConfig} from "./models/modal-button-config";

@Directive({
    selector: `[button-modal-click]`,
    host: {
        '(click)': 'onButtonModalClicked(_closeModal)'
    }
})
export class ModalCloseDirective {

    @Input('button-modal-click') _button:IModalButtonConfig;

    constructor(private modalService:ModalService) {

    }

    public onButtonModalClicked = ()=> {
        if (this._button) {
            if (this._button.callback) {
                this._button.callback(this.modalService.getInnerContentInstance());
            }

            if (this._button.closeModal) {
                this.modalService.closeModal();
            }
        }
    }

}
