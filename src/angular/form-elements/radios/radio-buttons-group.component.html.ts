export default `
<label class='sdc-radio-group__legend'>{{legend}}</label>
<div class='sdc-radio-group__radios {{direction}}'>
    <template ngFor let-item="$implicit" [ngForOf]="options.items">
        <div class="sdc-radio">
            <input
                type="radio"
                name="{{item.name}}"
                value="{{item.value}}"
                disabled="{{disabled || item.disabled || false}}"
                (change)="onValueChanged(item.value)"
                [(ngModel)]="value"
                />
            <label class="sdc-radio__label" *ngIf="item.label">{{ item.label }}</label>
        </div>
    </template>
</div>
`;
