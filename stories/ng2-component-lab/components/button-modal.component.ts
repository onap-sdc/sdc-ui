/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input} from "@angular/core";
import {ModalService} from "../../../src/angular/modals/modal.service";
import {InnerContent} from "./inner-content.component";

@Component({
    selector: "button-modal",
    template: `
        <div>
           <span>Error Modal</span>
           <sdc-button (click)="openErrorModal()">Click Me!</sdc-button>
       </div>
       <div>
           <span>Alert Modal</span>
           <sdc-button (click)="openAlertModal()">Click Me!</sdc-button>
       </div>
       <div>
           <span>Alert Modal</span>
           <sdc-button (click)="openActionModal()">Click Me!</sdc-button>
       </div>
        <div>
           <span>Custom Modal</span>
           <sdc-button (click)="openCustomModal()">Click Me!</sdc-button>
       </div>
`
})
export class ButtonModal {

    constructor(private modalService:ModalService) {

    }

    openErrorModal() {
        this.modalService.openErrorModal('ERROR!');
    }

    openAlertModal() {
        this.modalService.openAlertModal('Alert Modal', 'Be Careful');
    }

    openActionModal() {
        this.modalService.openActionModal('Action Modal', 'Are you shore?', ()=> {window.alert('OK OK OK OK')});
    }

    openCustomModal() {
        this.modalService.openCustomModal(InnerContent);
    }
}
