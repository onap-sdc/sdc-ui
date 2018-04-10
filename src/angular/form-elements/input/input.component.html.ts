export default `
<div class="sdc-input">
    <label class="sdc-input__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <input
        class="sdc-input__input"
        [ngClass]="{'error': !valid, 'disabled':disabled}"
        type="text"
        [name]="name"
        [placeholder]="placeHolder"
        [(ngModel)]="value"
        [maxlength]="maxLength"
        [minlength]="minLength"
        [type]="type"
        [formControl]="control"
        [attr.disabled]="disabled ? 'disabled' : null"
        (input)="onKeyPress($event.target.value)"
    />
</div>
`;
