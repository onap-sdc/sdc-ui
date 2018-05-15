export default `
<div class = "sdc-loader-wrapper" *ngIf="!global">
    <div class="sdc-loader-background" [ngClass]="{'sdc-hide-loader':!display}">
     <div class="sdc-loader loader" [ngClass]="{'sdc-hide-loader':!display}"></div>
    </div>
    <ng-content></ng-content>
</div>
<div  *ngIf="global&&display">
    <div class="sdc-loader-global-wrapper sdc-loader-background" >
    <div class="sdc-loader loader"></div>
    </div>   
</div>
`;
