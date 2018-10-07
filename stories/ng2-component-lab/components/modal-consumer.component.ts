import {Component, Input, Output, EventEmitter, ComponentRef} from "@angular/core";
import { ModalService } from "../../../src/angular/modals/modal.service";
import { IModalConfig, ModalType, ModalSize } from "../../../src/angular/modals/models/modal-config";
import { ModalInnerContent } from "./modal-inner-content-example.component";
import { ButtonComponent } from "../../../src/angular/buttons/button.component";
import { ModalButtonComponent } from './../../../src/angular/modals/modal-button.component';
import { Placement, ButtonType } from "../../../src/angular/common/enums";
import { ModalComponent } from "../../../src/angular/components";

const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';

@Component({
    selector: 'modal-consumer',
    template: `<sdc-button [text]="'View Modal'" (click)="openModal()"></sdc-button>`
})
export class ModalConsumerComponent {
    @Input() action: string;
    private customModal1: ModalComponent;
    private customModal2: ModalComponent;

    constructor(private modalService: ModalService) {
    }

    private openModal = (): void => {
        if (this[this.action]) {
            this[this.action]();
        }
    }

    private openInfoModal = (): void => {
        this.modalService.openInfoModal("Info modal title", MODAL_CONTENT, 'infoModalTestId');
    }

    private openWarningModal = (): void => {
        this.modalService.openWarningModal("Warning modal title", MODAL_CONTENT, 'warningModalTestId');
    }

    private openErrorModal = (): void => {
        this.modalService.openErrorModal("Error modal title", MODAL_CONTENT, 'errorModalTestId');
    }

    private openSuccessModal = (): void => {
        this.modalService.openSuccessModal("Success modal title", MODAL_CONTENT, 'successModalTestId');
    }

    private openInfoModalWithCustomButtons = (): void => {
        const buttons = [
            { text: 'CONFIRM', type: ButtonType.info, callback: this.onConfirmAction, closeModal: true },
            { text: 'CANCEL', type: ButtonType.info, closeModal: true }
        ] as ModalButtonComponent[];
        this.modalService.openInfoModal('Info modal title', MODAL_CONTENT, "infoModalCustomTestId", buttons);
    }

    private openWarningModalWithCustomButtons = (): void => {
        const buttons = [
            { text: 'SAVE', type: ButtonType.warning, callback: this.onSaveAction, closeModal: true },
            { text: 'APPLY', type: ButtonType.warning, callback: this.onApplyAction },
            { text: 'CANCEL', type: ButtonType.warning, closeModal: true }
        ] as ModalButtonComponent[];
        this.modalService.openWarningModal('Warning modal title', MODAL_CONTENT, "warningModalCustomTestId", buttons);
    }

    private onConfirmAction = (): void => {
        alert("Action has been confirmed, modal will be closed");
    }

    private onSaveAction = (): void => {
        alert("Action has been saved, modal will be close");
    }

    private onApplyAction = (): void => {
        alert("Action has been applied, modal will not be close");
    }

    private openCustomModal1 = (): void => {
        const modalConfig = {
            size: ModalSize.medium,
            title: 'Modal title',
            type: ModalType.custom,
            testId: 'sampleTestIdModal1',
            buttons: [
                      {id: "saveButton", text: "Save", callback: this.customModalOnSave1, closeModal: false},
                      {id: "cancelButton", text: "Cancel", size: 'x-small', type: ButtonType.secondary , closeModal: true}
                    ]
        } as IModalConfig;
        this.customModal1 = this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

    private customModalOnSave1 = (): void => {
        const saveButton: ModalButtonComponent = this.customModal1.getButtonById("saveButton");
        saveButton.show_spinner = true;
        saveButton.spinner_position = Placement.right;

        // Show spinner for 2 seconds
        console.log('Saving example, please wait ...');
        window.setTimeout((button: ModalButtonComponent) => {
            button.show_spinner = false;
            console.log('Finish saving');
        }, 2000, saveButton);
    }

    private openCustomModal2 = (): void => {
        const modalConfig = {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            testId: 'sampleTestIdModal2',
            buttons: [
                      {text: "Change title", callback: this.customModalChangeTitle2, closeModal: false},
                      {text: "Change buttons", callback: this.customModalUpdateButtons2, closeModal: false},
                      {text: "Disable close", callback: this.customModalUDisableClose2, closeModal: false}
                    ]
        } as IModalConfig;
        this.customModal2 = this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

    private customModalUDisableClose2 = (): void => {
        this.customModal2.getCloseButton().disabled = true;
    }

    private customModalChangeTitle2 = (): void => {
        this.customModal2.setTitle('New title');
    }

    private customModalUpdateButtons2 = (): void => {
        const newButtons = [
            {text: "Change title", callback: this.customModalChangeTitle2, closeModal: false},
            {text: "Do nothing", closeModal: false}
          ] as ModalButtonComponent[];
        this.customModal2.setButtons(newButtons);
    }

    private openErrorModalFromModal = ():void => {
        this.modalService.openErrorModal("Error", "Error example!!", "second-modal");
    }

    private openCustomModal3 = (): void => {
        const modalConfig = {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            testId: 'sampleTestIdModal3',
            buttons: [
                {text: "Open Error", callback: this.openErrorModalFromModal, closeModal: false}
            ]
        } as IModalConfig;
        this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

}
