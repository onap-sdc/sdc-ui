/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input} from "@angular/core";
import {ModalService} from "../../../src/angular/modals/modal.service";
import {InnerContent} from "./inner-content-example.component";
import {IModalConfig} from "../../../src/angular/modals/models/modal-config";
import {ModalButtonConfig} from "../../../src/angular/modals/models/modal-button-config";

@Component({
    selector: "button-modal-example",
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
export class ButtonModalExample {

    constructor(private modalService:ModalService) {

    }

    openErrorModal() {
        this.modalService.openErrorModal('ERROR!');
    }

    openAlertModal() {
        this.modalService.openAlertModal('Alert Modal', 'Be Careful');
    }

    openActionModal() {
        this.modalService.openActionModal('Action Modal', 'Are you shore?', ()=> {
            window.alert('OK OK OK OK')
        });
    }

    openCustomModal() {
        let actionButton:ModalButtonConfig = new ModalButtonConfig('Done', 'default', true, this.done);
        let saveButton:ModalButtonConfig = new ModalButtonConfig('Save', 'default', false, this.save);
        let cancelButton:ModalButtonConfig = new ModalButtonConfig('Cancel', 'outline', true);
        let modalConfig:IModalConfig = <IModalConfig> {
            size: 'sm',
            title: 'Test',
            type: 'custom',
            buttons: [actionButton, saveButton, cancelButton]
        };
        this.modalService.openCustomModal(modalConfig, InnerContent, {name: "Orit"});
    }

    public done = (result?:any)=> {
        alert("DONE WITH RESULT: " + result.name);
        console.log(result);
    }

    public save = (result?:any)=> {
        alert("SAVE RESULT: " + result.name);
    }
}
