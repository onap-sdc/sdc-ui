import {Directive} from "@angular/core";
import {ModalService} from "./modal.service";

@Directive({
    selector: `[modal-close-button]`,
    host: {
        '(click)': 'onButtonModalClicked()'
    }
})
export class ModalCloseDirective {

    constructor(private modalService: ModalService) {
    }

    public onButtonModalClicked = (): void => {
        this.modalService.closeModal();
    }
}
