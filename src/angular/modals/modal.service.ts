import {
    Injectable, Type, ViewContainerRef, ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef,
    EmbeddedViewRef, Injector,
} from '@angular/core';
import {ButtonModel} from "./button";
import {IModalConfig} from "./modal";
import {ModalComponent} from "./modal.component";
import {CreateDynamicComponentService} from "../utils/create-dynamic-component.service";


@Injectable()
export class ModalService {
    currentModal:ComponentRef<any>;

    constructor(private createDynamicComponentService:CreateDynamicComponentService) {
    }

    /* Shortcut method to open an alert modal with title, message, and close button that simply closes the modal. */
    public openAlertModal(title:string, message:string) {
        let closeButton:ButtonModel = new ButtonModel('Cancel', 'default', this.closeCurrentModal);
        let modalConfig:IModalConfig = <IModalConfig> {
            onClose: this.closeCurrentModal,
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
        let actionButton:ButtonModel = new ButtonModel(actionButtonText || 'Done', 'default', this.closeCurrentModal);
        let cancelButton:ButtonModel = new ButtonModel('Cancel', 'outline', this.closeCurrentModal);
        let modalConfig:IModalConfig = <IModalConfig> {
            onClose: this.closeCurrentModal,
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
        let closeButton:ButtonModel = new ButtonModel('Cancel', 'default', this.closeCurrentModal);
        let modalConfig:IModalConfig = <IModalConfig> {
            onClose: this.closeCurrentModal,
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


    public openCustomModal = (dynamicComponentType:Type<any>, dynamicComponentInput?:any) => {
        let actionButton:ButtonModel = new ButtonModel('OK', 'default', this.closeCurrentModal, this.afterClose);
        let cancelButton:ButtonModel = new ButtonModel('cancel', 'outline', this.closeCurrentModal);
        let modalConfig:IModalConfig = <IModalConfig> {
            onClose: this.closeCurrentModal,
            size: 'sm',
            title: 'Test',
            type: 'custom',
            buttons: [actionButton, cancelButton]
        };
        let modalInstance:ComponentRef<ModalComponent> = this.createDynamicComponentService.createComponentDynamically(ModalComponent, modalConfig);
        this.createDynamicComponentService.createComponentDynamically(dynamicComponentType, dynamicComponentInput, modalInstance.instance.dynamicContentContainer.element.nativeElement);
        this.currentModal = modalInstance;

        return modalInstance;
    }

    /* Use this method to create a modal with title, message, and completely custom buttons. Use response.instance.open() to open */
    public openModal = (customModalData:IModalConfig):ComponentRef<ModalComponent> => {
        let modalInstance:ComponentRef<ModalComponent> = this.createDynamicComponentService.createComponentDynamically(ModalComponent, customModalData);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public afterClose = ()=> {
        setTimeout(()=> { alert("AFTER CALLBACK"); }, 100);
    }

    public closeCurrentModal = ()=> {
        console.log("CALLLLLLLLLLEd");
        this.currentModal.destroy();
    }
}


