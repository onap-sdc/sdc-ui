export default `
<button class="sdc-button sdc-button-default sdc-button__{{ type }} btn-{{ size }}"
        [attr.data-tests-id]="testId"
        [disabled] = "disabled"
        (click)="invokeCallback()">
        {{ text }}
</button>
`;
