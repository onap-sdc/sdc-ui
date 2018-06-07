import { Component, Input, ViewChild } from "@angular/core";
import { NotificationsService } from "../../../src/angular/notifications/services/notifications.service";
import { NotificationSettings } from "../../../src/angular/notifications/utilities/notification.config";
import { InnerNotifContent } from "../../../src/angular/notifications/notification-inner-content-example.component";

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

    constructor(private notifsService : NotificationsService) {
    }

    sendSuccessNotif() {
        this.notifsService.push(new NotificationSettings("success", 'notif success message test', 'Notif Title Success'));
    }

    sendMultipleLinesSuceessNotif() {
        this.notifsService.push(new NotificationSettings("success", 'notif success message test with a lot of test so we can test multiple line case lets just add blabla bcdesfg hijklmnop qrstuvw xyz abcdesfg hijklmnop qrstuvw xyz', 'Notif Title Success'));
    }

    sendWarnNotif() {
        this.notifsService.push(new NotificationSettings("warning", 'notif warn message test', 'Notif Title Warn'));
    }

    sendInfoNotif() {
        this.notifsService.push(new NotificationSettings("info", 'notif info message test', 'Notif Title Info'));
    }

    sendSuccessCustomNotif() {
        this.notifsService.push(new NotificationSettings( "info", 'notif XYZ', 'Notif Custom XYZ', 10000, false, true, InnerNotifContent, { notifyText : "notif info custom inner message test", notifyTitle : "Notif Custom Inner Title Info"}));
    }
}
