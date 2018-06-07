import { experimentOn } from '@islavi/ng2-component-lab';

const sourceStyles: string = `
    .example-source {
      background: #eeeeee;
      padding: 10px;
      border: 1px solid #999999;
      margin-top:30px;
    }
    .example-source pre {
      overflow: hidden;
      background: #dddddd;
      margin-top: 5px;
      padding: 5px;
      user-select: text;
    }
    .example-source pre .comment{
      color:#666;
      opacity:0.4;
      font-style:italic;
      transition: opacity 400ms ease-in;
    }
    .example-source pre:hover .comment {
      opacity:1;
    }
`;

export default experimentOn('Modals')
    .group("Modals", [
      {
        id: 'infoModal',
        showSource: false,
        title: 'Info modal',
        description: `Opens info modal with one 'OK' button by default that close the modal.`,
        template: `
        <modal-consumer [action]="'openInfoModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>this.modalService.openInfoModal('Info modal title', 'Info modal content', 'infoModalTestId');</pre>
        </div>`,
        styles: [sourceStyles]
      },
      {
        id: 'warningModal',
        showSource: false,
        title: 'Warning modal',
        description: `Opens warning modal with one 'OK' button by default that close the modal.`,
        template: `
        <modal-consumer [action]="'openWarningModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>this.modalService.openWarningModal('Warning modal title', 'Warning modal content', 'warningModalTestId');</pre>
        </div>`,
        styles: [sourceStyles]
      },
      {
        id: 'errorModal',
        showSource: false,
        title: 'Error modal',
        description: `Opens error modal with one 'OK' button by default that close the modal.`,
        template: `
        <modal-consumer [action]="'openErrorModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>this.modalService.openErrorModal('Error modal title', 'Error modal content', 'errorModalTestId');</pre>
        </div>`,
        styles: [sourceStyles]
      },
      {
        id: 'successModal',
        showSource: false,
        title: 'Success modal',
        description: `Opens succsess modal with one 'OK' button by default that close the modal.`,
        template: `
        <modal-consumer [action]="'openSuccessModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>this.modalService.openSuccessModal('Success modal title', 'Success modal content', 'successModalTestId');</pre>
        </div>`,
        styles: [sourceStyles]
      },
      {
        id: 'infoModalWithCustomButtons',
        showSource: false,
        title: 'Info modal with custom buttons',
        description: `Same as info modal but with custom buttons and callbacks`,
        template: `
        <modal-consumer [action]="'openInfoModalWithCustomButtons'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>
          <![CDATA[
          const buttons = [
            { text: 'CONFIRM', type: ButtonType.info, callback: this.onConfirmAction, closeModal: true },
            { text: 'CANCEL', type: ButtonType.info, closeModal: true }
          ] as ModalButtonComponent[];
          this.modalService.openInfoModal('Info modal title', 'Info modal content', "infoModalTestId", buttons);
          private onConfirmAction = ():void => {{ '{' }}
            alert("Action has been confirmed");
          {{ '}' }};
          ]]>
        </pre>
        </div>`,
        styles: [sourceStyles]
      },
      {
        id: 'warningModalWithCustomButtons',
        showSource: false,
        title: 'Warning modal with custom buttons',
        description: `Same as warning modal but with custom buttons and callbacks`,
        template: `
        <modal-consumer [action]="'openWarningModalWithCustomButtons'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>
          <![CDATA[
          const buttons = [
            { text: 'SAVE', type: ButtonType.warning, callback: this.onSaveAction, closeModal: true },
            { text: 'APPLY', type: ButtonType.warning, callback: this.onApplyAction },
            { text: 'CANCEL', type: ButtonType.warning, closeModal: true }
          ] as ModalButtonComponent[];
          this.modalService.openInfoModal('Info modal title', 'Info modal content', "infoModalTestId", buttons);
          private onSaveAction = (): void => {
            alert("Action has been saved, modal will be close");
          }
          private onApplyAction = (): void => {
              alert("Action has been applied, modal will not be close");
          }
          ]]>
        </pre>
        </div>`,
        styles: [sourceStyles]
      },
      {
        id: 'customModal1',
        showSource: false,
        title: 'Custom modal 1',
        description: 'Opens a modal with dynamic inner content and customizable title, buttons, and callbacks.',
        template: `
        <modal-consumer [action]="'openCustomModal1'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>

          <span class="comment">//create modal config object </span>
          let modalConfig:IModalConfig = {{ '{' }}
          size: ModalSize.small,
          title: 'Title',
          type: ModalType.standard,
          buttons: [
                    {{ '{' }}text:"Save", size:"'x-small'", callback:this.customModalOnSave, closeModal:false{{ '}' }},
                    {{ '{' }}text:"Cancel", size:"'x-small'", closeModal:true{{ '}' }}]
            {{ '}' }};

          <span class="comment">//open modal with dynamically created 'modalInnerContent' example component. Send data object with input 'name'. </span>
          let myModal = this.modalService.openCustomModal(modalConfig, ModalInnerContent, {{ '{' }}name: "Sample Content"{{ '}' }});

          private customModalOnSave = ():void => {{ '{' }}
                const saveButton: ModalButtonComponent = myModal.getButtonById("saveButton");
                saveButton.show_spinner = true;
                saveButton.spinner_position = Placement.right;

                // Show spinner for 2 seconds
                console.log('Saving example, please wait ...');
                window.setTimeout((button: ModalButtonComponent) => {{ '{' }}
                    button.show_spinner = false;
                    console.log('Finish saving');
                {{ '}' }}, 2000, saveButton);
          {{ '}' }};
        </pre></div>`,
        styles: [sourceStyles]
      },
      {
        id: 'customModal2',
        showSource: false,
        title: 'Custom modal 2',
        description: 'Opens a modal with, and change his buttons and title',
        template: `
        <modal-consumer [action]="'openCustomModal2'"></modal-consumer>
        `,
        styles: [sourceStyles]
      },
        {
            id: 'multipleModals',
            showSource: false,
            title: 'Multiple Modals',
            description: 'Opens a modal from modal',
            template: `
            <modal-consumer [action]="'openCustomModal3'"></modal-consumer>
            `,
            styles: [sourceStyles]
        }
    ]);
