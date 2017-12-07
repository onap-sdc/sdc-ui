export default `
<div class="sdc-modal {{size}}">
    <div class="sdc-modal__content ">
        <div class="sdc-modal__header sdc-modal-type-{{type}}">
            <span class="title">{{ title }}</span>
            <button class="close-button" [button-modal-click]="{closeModal: true}"></button>
        </div>
        <div class="sdc-modal__body sdc-modal-type-{{type}}" >
            <div *ngIf="message">{{message}}</div>
            <div #dynamicContentContainer></div>
        </div>
        <div class="sdc-modal__footer">
            <sdc-button text="Close" [type]="'primary'" [disabled]="false" [size]="medium"></sdc-button>
        </div>
    </div>
</div>
<div class="modal-background"></div>
`;
