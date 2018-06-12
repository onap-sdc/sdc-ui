export default `
<button class="sdc-button sdc-button__{{ type }} btn-{{ size }} {{ iconPositionClass }}"
        [disabled] = "disabled || show_spinner"
        [attr.data-tests-id]="testId">
        <svg-icon
                *ngIf="icon_name"
                [name]="icon_name"
                [mode]="type"
                [size]="'medium'"
                >
        </svg-icon>
        {{ text }}
</button>
<svg-icon *ngIf="show_spinner" name="spinner" [size]="'medium'" class="sdc-button__spinner" [ngClass]="{left: spinner_position === placement.right}"></svg-icon>
`;
