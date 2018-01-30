export default `
<div class="sdc-notification" (click)="fadeOut()">
    <div class="sdc-notification__wrapper {{'type-' + notificationSetting.type}}" [class.fade-out__animated]="fade" (animationend)="destroyMe()">
        <div *ngIf="!notificationSetting.hasCustomContent" class="sdc-notification__content">
            <div class="sdc-notification__icon" >
            </div>
            <div class="sdc-notification__message">
                <div class="sdc-notification__title">
                    {{notificationSetting.notifyTitle}}
                </div>
                <div class="sdc-notification__text" >
                    {{notificationSetting.notifyText}}
                </div>
            </div>
        </div>
        <div #dynamicContentContainer></div>
    </div>
</div>
`;
