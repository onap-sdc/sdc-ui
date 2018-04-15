export default `
<label class='sdc-radio-group__legend'>{{legend}}</label>
<div class='sdc-radio-group__radios {{direction}}'>
    <template *ngFor="let item of options.items">
        <div class="sdc-radio">
            <label class="sdc-radio__animation-wrapper" SdcRippleClickAnimation [rippleClickDisabled]="disabled">
                <input class="sdc-radio__input"
                    type="radio"
                    name="{{item.name}}"
                    value="{{item.value}}"
                    disabled="{{disabled || item.disabled || false}}"
                    (change)="onValueChanged(item.value)"
                    [(ngModel)]="value"
                    />
                <span class="sdc-radio__label">{{ item.label }}</span>
            </label>
        </div>
    </template>
</div>
`;
