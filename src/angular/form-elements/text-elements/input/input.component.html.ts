export default `
<div class="sdc-input ">
    <label class="sdc-input__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <input
        class="sdc-input__input {{classNames}}"
        [ngClass]="{'error': (!valid && dirty), 'disabled':disabled}"
        [attr.name]="name ? name : null"
        [placeholder]="placeHolder"
        [(ngModel)]="value"
        [maxlength]="maxLength"
        [minlength]="minLength"
        [type]="type"
        [formControl]="control"
        [attr.disabled]="disabled ? 'disabled' : null"
        (input)="onKeyPress($event.target.value)"
        [attr.data-tests-id]="testId"
    />
</div>
`;
