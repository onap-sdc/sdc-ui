import {
    Injectable, Type, ComponentRef
} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {CreateDynamicComponentService} from "../utils/create-dynamic-component.service";
import {IModalConfig} from "./models/modal-config";
import {ModalButtonConfig} from "./models/modal-button-config";

@Injectable()
export class ModalService {

    private currentModal:ComponentRef<any>;

    constructor(private createDynamicComponentService:CreateDynamicComponentService) {
    }

    /* Shortcut method to open an alert modal with title, message, and close button that simply closes the modal. */
    public openAlertModal(title:string, message:string) {
        let closeButton:ModalButtonConfig = new ModalButtonConfig('Cancel');
        let modalConfig:IModalConfig = <IModalConfig> {
            size: 'sm',
            title: title,
            message: message,
            buttons: [closeButton],
            type: 'alert'
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openActionModal = (title:string, message:string, actionButtonCallback:Function, actionButtonText?:string):ComponentRef<ModalComponent> => {
        let actionButton:ModalButtonConfig = new ModalButtonConfig(actionButtonText || 'Done', 'default', true, actionButtonCallback);
        let cancelButton:ModalButtonConfig = new ModalButtonConfig('Cancel', 'outline', true);
        let modalConfig:IModalConfig = <IModalConfig> {
            size: 'sm',
            title: title,
            message: message,
            type: 'info',
            buttons: [actionButton, cancelButton]
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openErrorModal = (errorMessage?:string):ComponentRef<ModalComponent> => {
        let closeButton:ModalButtonConfig = new ModalButtonConfig('Cancel');
        let modalConfig:IModalConfig = <IModalConfig> {
            size: 'sm',
            title: 'Error',
            message: errorMessage,
            buttons: [closeButton],
            type: 'error'
        };
        let modalInstance:ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openCustomModal = (modalConfig:IModalConfig, dynamicComponentType:Type<any>, dynamicComponentInput?:any) => {
        let modalInstance:ComponentRef<ModalComponent> = this.createDynamicComponentService.createComponentDynamically(ModalComponent, modalConfig);
        modalInstance.instance.innerModalContent = this.createDynamicComponentService.createComponentDynamically(dynamicComponentType, dynamicComponentInput, modalInstance.instance.dynamicContentContainer.element.nativeElement);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openModal = (customModalData:IModalConfig):ComponentRef<ModalComponent> => {
        let modalInstance:ComponentRef<ModalComponent> = this.createDynamicComponentService.createComponentDynamically(ModalComponent, customModalData);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public getInnerContentInstance = ()=> {
        return this.currentModal.instance;
    }

    public closeModal = ()=> {
        this.currentModal.destroy();
    }

}


