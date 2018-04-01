import { Directive, HostListener } from "@angular/core";
import { ModalService } from "./modal.service";

@Directive({
    selector: `[modal-close-button]`
})
export class ModalCloseDirective {

    constructor(private modalService: ModalService) {
    }

    @HostListener('click') onClick() {
        this.modalService.closeModal();
    }

}
