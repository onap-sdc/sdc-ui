export default `
<div *ngIf="isVisible"  [ngClass]="relative ? 'loader-relative' : 'loader-fixed'" 
        [style.top]="offset.top" [style.left]="offset.left" [style.width]="offset.width"  [style.height]="offset.height">
    <div class="sdc-loader-back" [ngClass]="{'sdc-loader-relative':relative}"></div>
    <div class="sdc-loader {{size}}"></div>
</div>
<ng-content></ng-content>
`;
