/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input, ViewChild, Injector, ComponentFactoryResolver} from "@angular/core";
import {NotificationsService} from "../../../src/angular/notifications/services/notifications.service";
import {NotificationSettings} from "../../../src/angular/notifications/utilities/notification.config";
import {CreateDynamicComponentService} from "../../../src/angular/utils/create-dynamic-component.service";
import {InnerNotifContent} from "./notification-inner-content-example.component";

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
       <div>
           <span>Send Success MultipleLine Notification</span>
           <sdc-button (click)="sendMultipleLinesSuceessNotif()">Click Me!</sdc-button>
       </div>
       <!--<div>-->
           <!--<span>Send Success Custom Notification</span>-->
           <!--<sdc-button (click)="sendSuccessCustomNotif()">Click Me!</sdc-button>-->
       <!--</div>-->
       <sdc-notification-container>
        </sdc-notification-container>
`
})
export class NotificationsExample {

    //@ViewChild('mode1') userProfile: UserProfile


    constructor(private notifsService : NotificationsService, private injector:Injector, private resolver: ComponentFactoryResolver) {

    }

    sendSuccessNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "success", '', false, 'notif success message test', 'Notif Title Success', false, null, {}));
    }

    sendMultipleLinesSuceessNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "success", '', false, 'notif success message test with a lot of test so we can test multiple line case lets just add blabla bcdesfg hijklmnop qrstuvw xyz abcdesfg hijklmnop qrstuvw xyz', 'Notif Title Success', false, null, {}));
    }

    sendWarnNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "warn", '', false, 'notif warn message test', 'Notif Title Warn', false, null, {}));
    }

    sendInfoNotif() {
        this.notifsService.push(new NotificationSettings('top-right', 10000, "info", '', false, 'notif info message test', 'Notif Title Info', false, null, {}));
    }

    sendSuccessCustomNotif() {
        //InnerNotifContent innerNotif = const factory:ComponentFactory<any> = this.resolver.resolveComponentFactory(contentComponentType);
        //create innerContent without attaching
        //in ngOnInit, do location.attachView()
        let componentFactory = this.resolver.resolveComponentFactory(InnerNotifContent);
        //let compFactory = JSON.stringify(componentFactory);
        let componentRef = JSON.stringify(componentFactory.create(this.injector));
        let notifSetting: NotificationSettings = new NotificationSettings('top-right', 10000, "info", '', false, 'notif XYZ', 'Notif Custom XYZ', true, componentRef, { notifyText : "notif info custom inner message test", notifyTitle : "Notif Custom Inner Title Info"});
        this.notifsService.push(notifSetting);
    }
}
