export default `
<div class="sdc-checkbox">
    <label SdcRippleClickAnimation [rippleClickDisabled]="disabled">
        <input type="checkbox" class="sdc-checkbox__input" [ngModel]="checked" (ngModelChange)="toggleState($event)" [disabled]="disabled">
        <span class="sdc-checkbox__label">{{ label }}</span>
    </label>
</div>
`;
