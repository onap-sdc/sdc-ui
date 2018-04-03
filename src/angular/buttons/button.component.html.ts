export default `
<button class="sdc-button sdc-button__{{ type }} btn-{{ size }} {{ iconPositionClass }}"  [disabled] = "disabled">
        <svg-icon
                *ngIf="icon_name"
                [name]="icon_name"
                [mode]="iconMode"
                [size]="'medium'"
                >
        </svg-icon>
        {{ text }}
</button>
`;
