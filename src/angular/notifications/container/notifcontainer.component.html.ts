export default `
<div id="containerid" class="sdc-notification-container ntns">
        <sdc-notification  *ngFor="let notif of notifications" [notificationSetting]="notif" (destroyComponent)="onDestroyed(notif)" >
        </sdc-notification>
</div>
`;
