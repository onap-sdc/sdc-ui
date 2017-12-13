import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

import {NotificationSettings} from "../utilities/notification.config";
import {NotificationsService} from "../services/notifications.service";



@Component({
    selector: "sdc-notification-container",
    templateUrl: './notifcontainer.component.html'
})
export class NotificationContainerComponent {

    notifications : NotificationSettings[] = [];

    childdestroyed : string = 'false';

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

    ngOnChanges(changes: SimpleChanges) {
        console.log("NotificationContainerComponent:ngOnChanges changes: "+JSON.stringify(changes));
    }

    onDestroyed(event : any){
        console.log("NotificationContainerComponent:onDestroyed event: " + event);
        this.childdestroyed = 'true';
        // let notifs  = document.getElementsByTagName("sdc-notification");
        // let notif ;
        // if (notifs){
        //     for( notif in notifs ){
        //         // notif.className += "ngn-change-pos";
        //     };
        // }

        console.log("this.notifications - begin: " + this.notifications.length);

        let index: number = this.notifications.indexOf(event);
        if (index !== -1) {
            this.notifications.splice(index, 1);


        }

        console.log("this.notifications - after: " + this.notifications.length);


        // this.notifications.forEach(x => {
        //     if (x.destroy) {
        //         notification.delete()
        //     }
        // });

    }




}
