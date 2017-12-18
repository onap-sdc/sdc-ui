export default `
<div class="sdc-validator" *ngIf="!isValid">
    <div *ngFor="let error of errors">
        {{ error }}
    </div>
</div>
`;
