/**
 * Created by ng689e on 12/11/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

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
    }
    .example-source pre .comment{
      color:#666;
      opacity:0;
      font-style:italic;
      transition: opacity 400ms ease-in;
    }
    .example-source pre:hover .comment {
      opacity:1;
    }
`;

export default experimentOn('Modals')
    .group("Modals",[
      {        
        id: 'standardModal',
        showSource: false,
        title: 'Standard modal',
        description: 'Opens a modal with a custom title, message, and confirm button with a callback.',
        template: `
        <modal-consumer [action]="'openActionModal'"></modal-consumer> 
        <div class="example-source">Source Code:
        <pre>
          this.modalService.openActionModal('Standard Modal', 'Do you want to continue?', this.onConfirmAction);
          
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
        <div class="example-source">Source Code:<pre>this.modalService.openAlertModal("Alert Title", "An alert message.")</pre></div>`,
        styles: [sourceStyles]
      },      
      {
        id: 'errorModal',
        showSource: false,
        title: 'Error modal',
        description: `Opens a standard error modal with a custom message.`,
        template: `<modal-consumer [action]="'openErrorModal'"></modal-consumer>
        <div class="example-source">Source Code:<pre>this.modalService.openErrorModal("An error has occurred!")</pre></div>`,
        styles: [sourceStyles]
      },
      {        
        id: 'customModal',
        showSource: false,
        title: 'Custom modal',
        description: 'Opens a modal with dynamic inner content and customizable title, buttons, and callbacks.',
        template: `
        <modal-consumer [action]="'openCustomModal'"></modal-consumer> 
        <div class="example-source">Source Code:
        <pre>
            <span class="comment">//create buttons</span>
            let actionButton:ModalButtonConfig = new ModalButtonConfig('Done', 'default', true, this.customModalOnDone);
            let saveButton:ModalButtonConfig = new ModalButtonConfig('Save', 'default', false, this.customModalOnSave);
            let cancelButton:ModalButtonConfig = new ModalButtonConfig('Cancel', 'outline', true);

            <span class="comment">//create modal config object </span>
            let modalConfig:IModalConfig = {{ '{' }}
                size: 'sm',
                title: 'Test',
                type: 'custom',
                buttons: [actionButton, saveButton, cancelButton]
              {{ '}' }};

            <span class="comment">//open modal with dynamically created 'innerContent' component. Send data object with input 'name'. </span>
            this.modalService.openCustomModal(modalConfig, InnerContent, {{ '{' }}name: "Sample Content"{{ '}' }});


            private customModalOnDone = (result?:any):void => {{ '{' }}
                alert("Done with result: " + result.innerModalContent.instance.name);
            {{ '}' }}
        
            private customModalOnSave = (result?:any):void => {{ '{' }}
                alert("Save with result: " + result.innerModalContent.instance.name);
            {{ '}' }}
        </pre></div>`,
        styles: [sourceStyles]
      }
    ]);
