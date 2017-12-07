import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";

import {NotificationSettings} from "../utilities/notification.config";
import {NotificationsService} from "../services/notifications.service";



@Component({
    selector: "sdc-notification-container",
    templateUrl: './notifcontainer.component.html'
})
export class NotificationContainerComponent {

    notifications : NotificationSettings[] = [];

    constructor(private notify: NotificationsService) {

    }

    public ngOnInit(){

        console.log("NotificationContainerComponent:ngOnInit start");

        //let h = document.getElementById("containerid").offsetHeight;
        //document.getElementById("menuID").style.height = h + "px";

        this.notify.subscribe( (notif : NotificationSettings) => {
            console.log("NotificationContainerComponent:ngOnInit notif="+JSON.stringify(notif));
           this.notifications.push(notif);
        });

    }



}
