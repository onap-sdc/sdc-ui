import { Injectable, Type, ComponentRef } from '@angular/core';
import { ModalComponent } from "./modal.component";
import { CreateDynamicComponentService } from "../utils/create-dynamic-component.service";
import { IModalConfig, ModalType, ModalSize, IModalButtonComponent } from "./models/modal-config";
import { ButtonType } from '../common/enums';
import { ModalButtonComponent } from './modal-button.component';

@Injectable()
export class ModalService {

    private currentModal: ComponentRef<any>;

    constructor(private createDynamicComponentService: CreateDynamicComponentService) {
    }

    private getBaseModal = (type: ModalType | ButtonType, title: string, message: string, testId: string, buttons?: ModalButtonComponent[]): ComponentRef<ModalComponent> => {
        const modalConfig = {
            size: ModalSize.small,
            title: title,
            message: message,
            testId: testId,
            buttons: buttons ? buttons : [{ text: 'OK', type: type, closeModal: true }],
            type: type
        } as IModalConfig;
        const modalInstance: ComponentRef<ModalComponent> = this.openModal(modalConfig);
        this.currentModal = modalInstance;
        return modalInstance;
    }

    /* Shortcut method to open basic modals with title, message, and OK button that simply closes the modal. */
    public openInfoModal = (title: string, message: string, testId: string, buttons?: ModalButtonComponent[]): ComponentRef<ModalComponent> => {
        return this.getBaseModal(ModalType.info, title, message, testId, buttons);
    }

    public openWarningModal = (title: string, message: string, testId: string, buttons?: ModalButtonComponent[]): ComponentRef<ModalComponent> => {
        return this.getBaseModal(ModalType.warning, title, message, testId, buttons);
    }

    public openErrorModal = (title: string, message: string, testId: string, buttons?: ModalButtonComponent[]): ComponentRef<ModalComponent> => {
        return this.getBaseModal(ModalType.error, title, message, testId, buttons);
    }

    public openSuccessModal = (title: string, message: string, testId: string, buttons?: ModalButtonComponent[]): ComponentRef<ModalComponent> => {
        return this.getBaseModal(ModalType.success, title, message, testId, buttons);
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

    private destroyModal = (): void => {
        this.currentModal.destroy();
    }

}
