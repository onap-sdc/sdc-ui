/**
 * Created by rc2122 on 5/24/2018.
 */
export default `
<div class="sdc-textarea">
    <label class="sdc-textarea__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <textarea
        class="sdc-textarea__textarea {{classNames}}"
        [ngClass]="{'error': (!valid && dirty), 'disabled':disabled}"
        [attr.name]="name ? name : null"
        [placeholder]="placeHolder"
        [(ngModel)]="value"
        [maxlength]="maxLength"
        [minlength]="minLength"
        [formControl]="control"
        [attr.disabled]="disabled ? 'disabled' : null"
        (input)="onKeyPress($event.target.value)"
        [attr.data-tests-id]="testId">
    </textarea>
</div>
`;
