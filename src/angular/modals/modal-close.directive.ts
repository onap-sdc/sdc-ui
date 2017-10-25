import {Directive, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ModalService} from "./modal.service";

@Directive({
    selector: `[modal-close]`,
    host: {
        '(click)': 'closeModalIfNeeded(_closeModal)'
    }
})
export class ModalCloseDirective {

    /** Dialog close input. */
    @Input('modal-close') _closeModal:boolean;

    constructor(public modalService:ModalService) {

    }

    public closeModalIfNeeded = ()=> {
        if (this._closeModal) {
            this.modalService.closeModal();
            console.log("DIRECTIVE CLOSE MODAL!!!")
        }
    }

}
