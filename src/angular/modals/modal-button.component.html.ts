export default `
<button class="sdc-button sdc-button-default sdc-button__{{ type }} btn-{{ size }}"
        [disabled] = "disabled" (click)="invokeCallback()">
        {{ text }}
</button>
`;
