import { Injectable, Type, ComponentRef } from '@angular/core';
import { ModalComponent } from "./modal.component";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { IModalConfig, ModalType, ModalSize, IModalButtonComponent } from "./models/modal-config";

@Injectable()
export class ModalService {

    private currentModal: ComponentRef<any>;

    constructor(private createDynamicComponentService: CreateDynamicComponentService) {
    }

    /* Shortcut method to open an alert modal with title, message, and close button that simply closes the modal. */
    public openAlertModal(title: string, message: string, actionButtonText?: string, actionButtonCallback?: Function, testId?: string) {
        const modalConfig = {
            size: ModalSize.small,
            title: title,
            message: message,
            testId: testId,
            buttons: this.createButtons('secondary', actionButtonText, actionButtonCallback),
            type: ModalType.alert
        } as IModalConfig;
        const modalInstance: ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openActionModal = (title: string, message: string, actionButtonText?: string, actionButtonCallback?: Function, testId?: string): ComponentRef<ModalComponent> => {
        const modalConfig = {
            size: ModalSize.small,
            title: title,
            message: message,
            testId: testId,
            type: ModalType.standard,
            buttons: this.createButtons('primary', actionButtonText, actionButtonCallback)
        } as IModalConfig;
        const modalInstance: ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openErrorModal = (errorMessage?: string, testId?: string): ComponentRef<ModalComponent> => {
        const modalConfig = {
            size: ModalSize.small,
            title: 'Error',
            message: errorMessage,
            testId: testId,
            buttons: [{text: "OK", type: "alert", closeModal: true}],
            type: ModalType.error
        } as IModalConfig;
        const modalInstance: ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public openCustomModal = (modalConfig: IModalConfig, dynamicComponentType: Type<any>, dynamicComponentInput?: any) => {
        const modalInstance: ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.createInnnerComponent(dynamicComponentType, dynamicComponentInput);
        return modalInstance;
    }

    public createInnnerComponent = (dynamicComponentType: Type<any>, dynamicComponentInput?: any): void => {
        this.currentModal.instance.innerModalContent = this.createDynamicComponentService.insertComponentDynamically(dynamicComponentType, dynamicComponentInput, this.currentModal.instance.dynamicContentContainer);
    }

    public openModal = (customModalData: IModalConfig): ComponentRef<ModalComponent> => {
        const modalInstance: ComponentRef<ModalComponent> = this.createDynamicComponentService.createComponentDynamically(ModalComponent, customModalData);
        modalInstance.instance.closeAnimationComplete.subscribe(() => {
            this.destroyModal();
        });
        this.currentModal = modalInstance;
        return modalInstance;
    }

    public getCurrentInstance = () => {
        return this.currentModal.instance;
    }

    public closeModal = (): void => { // triggers closeModal animation, which then triggers toggleModal.done and the subscription to destroyModal
        this.currentModal.instance.modalVisible = false;
    }

    private createButtons = (type: string, actionButtonText?: string, actionButtonCallback?: Function): Array<IModalButtonComponent> => {
        const buttons: Array<IModalButtonComponent> = [];
        if (actionButtonText && actionButtonCallback) {
            buttons.push({text: actionButtonText, type: type, callback: actionButtonCallback, closeModal: true});
            buttons.push({text: 'Cancel', type: 'secondary', closeModal: true});
        } else {
            buttons.push({text: 'Cancel', type: type, closeModal: true});
        }

        return buttons;
    }

    private destroyModal = (): void => {
        this.currentModal.destroy();
    }

}
