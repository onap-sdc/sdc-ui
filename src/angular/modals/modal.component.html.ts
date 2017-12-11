export default `
<div class="sdc-modal {{size}}">
    <div class="sdc-modal__content ">
        <div class="sdc-modal__header sdc-modal-type-{{type}}">
            <span class="title">{{ title }}</span>
            <span class="close-button" [button-modal-click]="{closeModal: true}">x</span>
        </div>
        <div class="sdc-modal__body sdc-modal-type-{{type}}" >
            <div *ngIf="message">{{message}}</div>
            <div #dynamicContentContainer></div>
        </div>

        <div class="sdc-modal__footer">
            <sdc-button *ngFor="let button of buttons"
                    [sdcButtonStyle]="button.sdcButtonStyle"
                    [disabled] = "button.disabled"
                    [button-modal-click]="button">{{button.text}}</sdc-button>
        </div>
    </div>
</div>
<div class="modal-background"></div>
`;
