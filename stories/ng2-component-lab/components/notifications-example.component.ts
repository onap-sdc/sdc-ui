/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input, ViewChild} from "@angular/core";
import {NotificationsService} from "../../../src/angular/notifications/services/notifications.service";
import {NotificationSettings} from "../../../src/angular/notifications/utilities/notification.config";
import {InnerNotifContent} from "../../../src/angular/notifications/notification-inner-content-example.component";

@Component({
    selector: "notifications-example",
    template: `
       <div>
           <span>Send Success Notification</span>
           <sdc-button (click)="sendSuccessNotif()" text="Click Me!"></sdc-button>
       </div>
       <div>
           <span>Send Warning Notification</span>
           <sdc-button (click)="sendWarnNotif()" text="Click Me!"></sdc-button>
       </div>
       <div>
           <span>Send Info Notification</span>
           <sdc-button (click)="sendInfoNotif()" text="Click Me!"></sdc-button>
       </div>
       <div>
           <span>Send Success MultipleLine Notification</span>
           <sdc-button (click)="sendMultipleLinesSuceessNotif()" text="Click Me!"></sdc-button>
       </div>
       <div>
           <span>Send Success Custom Notification</span>
           <sdc-button (click)="sendSuccessCustomNotif()" text="Click Me!"></sdc-button>
       </div>
       <sdc-notification-container>
        </sdc-notification-container>
`
})
export class NotificationsExample {

    //@ViewChild('mode1') userProfile: UserProfile


    constructor(private notifsService : NotificationsService) {

    }

    sendSuccessNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "success", '', false, 'notif success message test', 'Notif Title Success', false));
    }

    sendMultipleLinesSuceessNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "success", '', false, 'notif success message test with a lot of test so we can test multiple line case lets just add blabla bcdesfg hijklmnop qrstuvw xyz abcdesfg hijklmnop qrstuvw xyz', 'Notif Title Success', false));
    }

    sendWarnNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "warn", '', false, 'notif warn message test', 'Notif Title Warn', false));
    }

    sendInfoNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "info", '', false, 'notif info message test', 'Notif Title Info', false));
    }

    sendSuccessCustomNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "info", '', false, 'notif XYZ', 'Notif Custom XYZ', true, InnerNotifContent, { notifyText : "notif info custom inner message test", notifyTitle : "Notif Custom Inner Title Info"}));
    }
}
