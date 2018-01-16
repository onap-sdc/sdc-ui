export default `
<div class="sdc-checkbox">
    <label ripple-click-animation [rippleClickDisabled]="disabled">
        <input type="checkbox" class="sdc-checkbox__input" [ngModel]="checked" (ngModelChange)="toggleState($event)" [disabled]="disabled">
        <span class="sdc-checkbox__label">{{ label }}</span>
    </label>
</div>
`;