import { Injectable, Type, ComponentRef } from '@angular/core';
import { ModalComponent } from "./modal.component";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { IModalConfig, ModalType, ModalSize, IModalButtonComponent } from "./models/modal-config";


@Injectable()
export class ModalService {

    private currentModal:ComponentRef<any>;

    constructor(private createDynamicComponentService:CreateDynamicComponentService) {
    }

    /* Shortcut method to open an alert modal with title, message, and close button that simply closes the modal. */
    public openAlertModal(title:string, message:string, actionButtonText?:string, actionButtonCallback?:Function) {
        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.small,
            title: title,
            message: message,
            buttons: this.createButtons('secondary', actionButtonText, actionButtonCallback),
            type: ModalType.alert
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openActionModal = (title:string, message:string, actionButtonText?:string, actionButtonCallback?:Function):ComponentRef<ModalComponent> => {

        let modalConfig:IModalConfig = <IModalConfig> {
            size: ModalSize.small,
            title: title,
            message: message,
            type: ModalType.standard,
            buttons: this.createButtons('primary', actionButtonText, actionButtonCallback)
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
            buttons: [{text: "Cancel", closeModal:true}],
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

    private createButtons = (type:string, actionButtonText?:string, actionButtonCallback?:Function):Array<IModalButtonComponent> => {
        let buttons:Array<IModalButtonComponent> = [];
        if(actionButtonText && actionButtonCallback) {
            buttons.push({text:actionButtonText, type: type, callback: actionButtonCallback, closeModal: true});
            buttons.push({text: 'Cancel', type: 'secondary', closeModal:true});
        } else {
            buttons.push({text: 'Cancel', type: type, closeModal:true});
        }

        return buttons;
    }

    private destroyModal = ():void => {
        this.currentModal.destroy();
    };

}
