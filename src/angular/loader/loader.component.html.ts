export default `
<div class = "sdc-loader-wrapper" *ngIf="!global">
    <div class="sdc-loader-background" [ngClass]="{'sdc-hide-loader':active < 1}">
     <div class="sdc-loader {{ size }}" [ngClass]="{'sdc-hide-loader':active < 1}"></div>
    </div>
    <ng-content></ng-content>
</div>
<div  *ngIf="global&&active">
    <div class="sdc-loader-global-wrapper sdc-loader-background" >
        <div class="sdc-loader {{ size }}"></div>
    </div>
</div>
`;
