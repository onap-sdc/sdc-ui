export default `
<div class="sdc-validator" *ngIf="show && !isValid">
    <div *ngFor="let error of errors">
        {{ error }}
    </div>
</div>
`;
