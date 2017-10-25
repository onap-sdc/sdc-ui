/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input} from "@angular/core";
import {ModalService} from "../../../src/angular/modals/modal.service";
import {InnerContent} from "./inner-content.component";
import {ButtonModel} from "../../../src/angular/modals/button";
import {IModalConfig} from "../../../src/angular/modals/modal";

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

    private result: string;

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
        let actionButton:ButtonModel = new ButtonModel('Done', 'default', true, this.actionCallbackExample);
        let saveButton:ButtonModel = new ButtonModel('Save', 'outline', false);
        let cancelButton:ButtonModel = new ButtonModel('cancel', 'outline', true);
        let modalConfig:IModalConfig = <IModalConfig> {
            onClose: this.modalService.closeModal,
            size: 'sm',
            title: 'Test',
            type: 'custom',
            buttons: [actionButton, saveButton, cancelButton]
        };
        this.modalService.openCustomModal(modalConfig, InnerContent, {name: "Orit"});

        this.modalService.afterClosed().subscribe(result => {
            console.log('The dialog was closed, result is: ', result);
            this.result = result;
        });
    }


    public actionCallbackExample = ()=> {
        setTimeout(()=> { alert("AFTER CALLBACK"); }, 100);
        // this.modalService.closeModal();

    }
}
