export default `
<div class="sdc-modal {{size}}">
    <div class="sdc-modal__content ">
        <div class="sdc-modal__header sdc-modal-type-{{type}}">
            <span class="title">{{ title }}</span>
            <span class="close-button" modal-close-button>x</span>
        </div>
        <div class="sdc-modal__body sdc-modal-type-{{type}}" >
            <div *ngIf="message">{{message}}</div>
            <div #dynamicContentContainer></div>
        </div>
        <div class="sdc-modal__footer">
            <sdc-modal-button *ngFor="let button of buttons" [text]="button.text" [type]="button.type || 'primary'" [disabled]="button.disabled" [size]="button.size || 'medium'"  [closeModal]="button.closeModal" [callback]="button.callback"></sdc-modal-button>
        </div>
    </div>
</div>
<div class="modal-background"></div>
`;
