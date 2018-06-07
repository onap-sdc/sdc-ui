export default `
<ng-content *ngIf="!disabled && (validateElement && validateElement.dirty)"></ng-content>
`;
