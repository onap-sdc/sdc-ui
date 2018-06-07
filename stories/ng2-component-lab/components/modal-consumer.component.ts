import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ModalService } from "../../../src/angular/modals/modal.service";
import { IModalConfig, ModalType, ModalSize } from "../../../src/angular/modals/models/modal-config";
import { ModalInnerContent } from "./modal-inner-content-example.component";
import { ButtonComponent } from "../../../src/angular/buttons/button.component";
import { ModalButtonComponent } from './../../../src/angular/modals/modal-button.component';
import { Placement } from "../../../src/angular/common/enums";
import { ModalComponent } from "../../../src/angular/components";

const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';

@Component({
    selector: 'modal-consumer',
    template: `<sdc-button [text]="'View Modal'" (click)="openModal()"></sdc-button>`
})
export class ModalConsumer {
    @Input() action: string;

    constructor(private modalService: ModalService) {
    }

    private openModal = (): void => {
        if (this[this.action]) {
            this[this.action]();
        }
    }

    private openErrorModal = (): void => {
        this.modalService.openErrorModal(MODAL_CONTENT, "sampleTestId");
    }

    private openAlertModal = (): void => {
        this.modalService.openAlertModal("Alert Title", MODAL_CONTENT, 'Continue', this.onConfirmAction, 'sampleTestId');
    }

    private openActionModal = (): void => {
        this.modalService.openActionModal('Standard Modal', MODAL_CONTENT, "OK", this.onConfirmAction, "sampleTestId");
    }

    private onConfirmAction = (): void => {
        alert("Action has been confirmed");
    }

    private openCustomModal1 = (): void => {
        const modalConfig = {
            size: ModalSize.medium,
            title: 'Title',
            type: ModalType.custom,
            testId: 'sampleTestIdModal1',
            buttons: [
                      {id: "saveButton", text: "Save", callback: this.customModalOnSave1, closeModal: false},
                      {id: "cancelButton", text: "Cancel", size: 'x-small', type: 'secondary', closeModal: true}
                    ] as ModalButtonComponent[]
        } as IModalConfig;
        this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

    private customModalOnSave1 = (): void => {
        const currentInstance: ModalComponent = this.modalService.getCurrentInstance();
        const saveButton: ModalButtonComponent = currentInstance.getButtonById("saveButton");
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
        this.modalService.openCustomModal(modalConfig, ModalInnerContent, {name: "Sample Content"});
    }

    private customModalUDisableClose2 = (): void => {
        const currentInstance: ModalComponent = this.modalService.getCurrentInstance();
        currentInstance.getCloseButton().disabled = true;
    }

    private customModalChangeTitle2 = (): void => {
        const currentInstance: ModalComponent = this.modalService.getCurrentInstance();
        currentInstance.setTitle('New title');
    }

    private customModalUpdateButtons2 = (): void => {
        const currentInstance: ModalComponent = this.modalService.getCurrentInstance();
        const newButtons = [
            {text: "Change title", callback: this.customModalChangeTitle2, closeModal: false},
            {text: "Do nothing", closeModal: false}
          ] as ModalButtonComponent[];
        currentInstance.setButtons(newButtons);
    }
}
