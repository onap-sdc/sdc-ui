export default `
<div class="sdc-modal {{size}}">
    <div class="sdc-modal__wrapper sdc-modal-type-{{type}}" [@toggleModal]="modalVisible" (@toggleModal.done)="modalToggled($event)">

        <div class="sdc-modal__header sdc-{{type}}__header">
            <div class="sdc-modal__icon" *ngIf="type!='custom'" [innerHtml]="svgIconContentSafeHtml"></div>
            <div *ngIf="title" class="title" >{{ title }}</div>
            <sdc-modal-close-button #modalCloseButton [testId]="getCalculatedTestId('close')" [modalInstanceRef]="instanceRef"></sdc-modal-close-button>
        </div>

        <div class="sdc-modal__content" >
                <div *ngIf="message" [innerHtml]="message"></div>
                <div #dynamicContentContainer></div>
        </div>

        <div class="sdc-modal__footer">
            <sdc-modal-button *ngFor="let button of buttons"
                [text]="button.text"
                [type]="button.type || 'primary'"
                [disabled]="button.disabled"
                [size] = "button.size ? button.size : 'default'"
                [closeModal]="button.closeModal"
                [spinner_position]="button.spinner_position"
                [show_spinner]="button.show_spinner"
                [callback]="button.callback"
                [testId]="getCalculatedTestId('button-' + button.text)"
                (closeModalEvent)="closeModal()"
                >
            </sdc-modal-button>
        </div>

    </div>
</div>
<div class="modal-background" [@toggleBackground]="modalVisible" ></div>
`;
