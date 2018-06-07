import { experimentOn } from '@islavi/ng2-component-lab';

const sourceStyles:string =`
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
        id: 'standardModal',
        showSource: false,
        title: 'Standard modal',
        description: 'Opens a modal with a custom title, message, and confirm button with a callback.',
        template: `
        <modal-consumer [action]="'openActionModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>
          const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
            'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';

          this.modalService.openActionModal('Standard Modal', MODAL_CONTENT, "OK", this.onConfirmAction, "sampleTestId");

          private onConfirmAction = ():void => {{ '{' }}
            alert("Action has been confirmed");
          {{ '}' }};
        </pre></div>`,
        styles: [sourceStyles]
      },
      {
        id: 'alertModal',
        showSource: false,
        title: 'Alert modal',
        description: 'Opens a standard alert modal with a custom title and message.',
        template: `


        <modal-consumer [action]="'openAlertModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>
          const MODAL_CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
          'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';

          this.modalService.openAlertModal("Alert Title", MODAL_CONTENT, "Continue", this.onConfirmAction, "sampleTestId");
        </pre></div>`,
        styles: [sourceStyles]
      },
      {
        id: 'errorModal',
        showSource: false,
        title: 'Error modal',
        description: `Opens a standard error modal with a custom message.`,
        template: `<modal-consumer [action]="'openErrorModal'"></modal-consumer>
        <div class="example-source">Source Code:
        <pre>

          this.modalService.openErrorModal("An error has occurred!", "sampleTestId");
        </pre></div>`,
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
          this.modalService.openCustomModal(modalConfig, ModalInnerContent, {{ '{' }}name: "Sample Content"{{ '}' }});

          private customModalOnDone = ():void => {{ '{' }}
              let currentInstance:any = this.modalService.getCurrentInstance();
              alert("Save with result: " + currentInstance.innerModalContent.instance.name);
          {{ '}' }};

          private customModalOnSave = ():void => {{ '{' }}
              let currentInstance:any = this.modalService.getCurrentInstance();
              alert("Save with result: " + currentInstance.innerModalContent.instance.name);
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
      }
    ]);
