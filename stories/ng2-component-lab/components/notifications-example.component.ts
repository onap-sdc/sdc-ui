/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input} from "@angular/core";
import {NotificationsService} from "../../../src/angular/notifications/services/notifications.service";
import {NotificationSettings} from "../../../src/angular/notifications/utilities/notification.config";

@Component({
    selector: "notifications-example",
    template: `
       <div>
           <span>Send Success Notification</span>
           <sdc-button (click)="sendSuccessNotif()">Click Me!</sdc-button>
       </div>
       <div>
           <span>Send Warning Notification</span>
           <sdc-button (click)="sendWarnNotif()">Click Me!</sdc-button>
       </div>
       <div>
           <span>Send Info Notification</span>
           <sdc-button (click)="sendInfoNotif()">Click Me!</sdc-button>
       </div>
       <sdc-notification-container></sdc-notification-container>
`
})
export class NotificationsExample {

    constructor(private notifsService : NotificationsService) {

    }

    sendSuccessNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "success", '', false, 'notif success message test', 'Notif Title Success'));
    }

    sendWarnNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "warn", '', false, 'notif warn message test', 'Notif Title Warn'));
    }
    
    sendInfoNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "info", '', false, 'notif info message test', 'Notif Title Info'));
    }
}
