/**
 * Created by ng689e on 12/10/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ModalService} from "../../../src/angular/modals/modal.service";
import {IModalConfig, ModalType, ModalSize} from "../../../src/angular/modals/models/modal-config";
import {ModalInnerContent} from "./modal-inner-content-example.component";
import { ButtonComponent } from "../../../src/angular/buttons/button.component";


@Component({
    selector: 'modal-consumer',
    template: `<sdc-button [text]="'View Modal'" (click)="openModal()"></sdc-button>`
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
        this.modalService.openActionModal('Standard Modal', 'Do you want to continue?', "Yes", this.onConfirmAction);
    };

    private onConfirmAction = ():void => {
        alert("Action has been confirmed");
    };

    private openCustomModal = ():void => {

        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.small,
            title: 'Test',
            type: ModalType.standard,
            buttons: [{text:"Save & Close", callback:this.customModalOnDone, closeModal:true}, 
                      {text:"Save", callback:this.customModalOnSave, closeModal:false}, 
                      {text:"Cancel", closeModal:true}]
        };
        this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

    private customModalOnDone = ():void => {
        let currentInstance:any = this.modalService.getCurrentInstance();
        alert("Done with result: " + currentInstance.innerModalContent.instance.name);
    };

    private customModalOnSave = ():void => {
        let currentInstance:any = this.modalService.getCurrentInstance();
        alert("Save with result: " + currentInstance.innerModalContent.instance.name);
        
    };
}