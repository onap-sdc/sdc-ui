import { Injectable, Type, ComponentRef } from '@angular/core';
import { ModalComponent } from "./modal.component";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { IModalConfig, ModalType, ModalSize } from "./models/modal-config";


@Injectable()
export class ModalService {

    private currentModal:ComponentRef<any>;

    constructor(private createDynamicComponentService:CreateDynamicComponentService) {
    }

    /* Shortcut method to open an alert modal with title, message, and close button that simply closes the modal. */
    public openAlertModal(title:string, message:string) {
        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.small,
            title: title,
            message: message,
            buttons: [{text:'OK', closeModal:true}],
            type: ModalType.alert
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openActionModal = (title:string, message:string, actionButtonText:string, actionButtonCallback:Function):ComponentRef<ModalComponent> => {
        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.small,
            title: title,
            message: message,
            type: ModalType.standard,
            buttons: [{text: actionButtonText, callback: actionButtonCallback, closeModal:true },
                      {text: 'Cancel', type: 'secondary', closeModal:true}]
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openErrorModal = (errorMessage?:string):ComponentRef<ModalComponent> => {
        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.small,
            title: 'Error',
            message: errorMessage,
            buttons: [{text: "OK", type: "alert", closeModal:true}],
            type: ModalType.error
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openCustomModal = (modalConfig:IModalConfig, dynamicComponentType:Type<any>, dynamicComponentInput?:any) => {
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        modalInstance.instance.innerModalContent = this.createDynamicComponentService.insertComponentDynamically(dynamicComponentType, dynamicComponentInput, modalInstance.instance.dynamicContentContainer);
        return modalInstance;
    }

    public openModal = (customModalData:IModalConfig):ComponentRef<ModalComponent> => {
        let modalInstance:ComponentRef<ModalComponent> = this.createDynamicComponentService.createComponentDynamically(ModalComponent, customModalData);
        modalInstance.instance.closeAnimationComplete.subscribe(() => {
            this.destroyModal();
        });
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public getCurrentInstance = ()=> {
        return this.currentModal.instance;
    }

    public closeModal = ():void => { //triggers closeModal animation, which then triggers toggleModal.done and the subscription to destroyModal
        this.currentModal.instance.modalVisible = false;
    };

    private destroyModal = ():void => {
        this.currentModal.destroy();
    };

}
