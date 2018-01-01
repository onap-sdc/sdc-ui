/**
 * Created by ng689e on 12/10/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ModalService} from "../../../src/angular/modals/modal.service";
import {IModalConfig, ModalType, ModalSize} from "../../../src/angular/modals/models/modal-config";
import {ModalInnerContent} from "./modal-inner-content-example.component";
import { ButtonComponent } from "../../../src/angular/buttons/button.component";

const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';


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
        this.modalService.openErrorModal(MODAL_CONTENT);       
    };

    private openAlertModal = ():void => { 
        this.modalService.openAlertModal("Alert Title", MODAL_CONTENT);
    };

    private openActionModal = ():void => {
        this.modalService.openActionModal('Standard Modal', MODAL_CONTENT, "Yes", this.onConfirmAction);
    };

    private onConfirmAction = ():void => {
        alert("Action has been confirmed");
    };

    private openCustomModal = ():void => {

        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            buttons: [{text:"Save & Close", callback:this.customModalOnDone, closeModal:true}, 
                      {text:"Save", callback:this.customModalOnSave, closeModal:false}, 
                      {text:"Cancel", type: 'secondary', closeModal:true}]
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