/**
 * Created by ng689e on 12/10/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ModalService} from "../../../src/angular/modals/modal.service";
import {IModalConfig} from "../../../src/angular/modals/models/modal-config";
import {ModalButtonConfig} from "../../../src/angular/modals/models/modal-button-config";
import {InnerContent} from "./inner-content-example.component";


@Component({
    selector: 'modal-consumer',
    template: `<sdc-button [sdcButtonStyle]="'outline'" (click)="openModal()">View Modal</sdc-button>`
})
export class ModalConsumer {
    @Input() action:string; 

    constructor(private modalService: ModalService){
    }

    private openModal = ():void => {
        if (this[this.action]) {
            this[this.action](); 
        }
    }

    private openErrorModal = ():void => {
        this.modalService.openErrorModal("An error has occurred!");       
    };

    private openAlertModal = ():void => {
        this.modalService.openAlertModal("Alert Title", "An alert message.");
    };

    private openActionModal = ():void => {
        this.modalService.openActionModal('Standard Modal', 'Do you want to continue?', this.onConfirmAction, "Yes");
    };

    private onConfirmAction = ():void => {
        alert("Action has been confirmed");
    };

    private openCustomModal = ():void => {
        let actionButton:ModalButtonConfig = new ModalButtonConfig('Done', 'default', true, this.customModalOnDone);
        let saveButton:ModalButtonConfig = new ModalButtonConfig('Save', 'default', false, this.customModalOnSave);
        let cancelButton:ModalButtonConfig = new ModalButtonConfig('Cancel', 'outline', true);
        let modalConfig:IModalConfig = <IModalConfig> {
            size: 'sm',
            title: 'Test',
            type: 'custom',
            buttons: [actionButton, saveButton, cancelButton]
        };
        this.modalService.openCustomModal(modalConfig, InnerContent, {name: "Sample Content"});
    }

    private customModalOnDone = (result?:any):void => {
        alert("Done with result: " + result.innerModalContent.instance.name);
    };

    private customModalOnSave = (result?:any):void => {
        alert("Save with result: " + result.innerModalContent.instance.name);
    };
}