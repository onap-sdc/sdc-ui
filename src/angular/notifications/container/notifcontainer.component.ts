import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationSettings } from "../utilities/notification.config";
import { NotificationsService } from "../services/notifications.service";
import template from "./notifcontainer.component.html";

@Component({
    selector: "sdc-notification-container",
    template: template
})
export class NotificationContainerComponent implements OnInit {
    notifications: NotificationSettings[] = [];

    constructor(private notify: NotificationsService) {
    }

    public ngOnInit(){
        this.notify.subscribe( (notif : NotificationSettings) => {
            this.notifications.push(notif);
        });
    }


    private onDestroyed = (event : any):void =>{
        let index: number = this.notifications.indexOf(event);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    }

}
