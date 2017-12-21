export default `
<div class="sdc-validation" *ngIf="show && !validation.isValid">
    <ng-content></ng-content>
</div>
`;
