export default `
<button class="sdc-button sdc-button__{{ type }} btn-{{ size }} {{ iconPositionClass }} "
    [disabled] = "disabled || show_spinner">
        <svg-icon
                *ngIf="icon_name"
                [name]="icon_name"
                [mode]="iconMode"
                [size]="'medium'"
                >
        </svg-icon>
        {{ text }}
</button>
<div *ngIf="show_spinner" class="sdc-button--spinner" [ngClass]="{left: spinner_position === placement.right}" ></div>
`;
