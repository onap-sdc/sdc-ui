export default `
<div class="sdc-notification {{'type-' + notificationSetting.type}}" (click)="fadeOut()" [class.fade-out__animated]="fade" (animationend)="destroyMe()">
    
        <div *ngIf="!notificationSetting.hasCustomContent" class="sdc-notification__icon_container">
            <div class="sdc-notification__icon" >
            </div>
        </div>    
        <div *ngIf="!notificationSetting.hasCustomContent" class="sdc-notification__message">
            <div class="sdc-notification__title">
                {{notificationSetting.notifyTitle}}
            </div>
            <div class="sdc-notification__text" >
                {{notificationSetting.notifyText}}
            </div>
        </div>
        <div *ngIf="notificationSetting.hasCustomContent" #dynamicContentContainer></div>
    
</div>
`;
