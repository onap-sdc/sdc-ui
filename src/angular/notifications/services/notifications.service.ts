import {Injectable} from '@angular/core';
import {NotificationSettings}  from '../utilities/notification.config'
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NotificationsService  {

    notifs : NotificationSettings[] = [];

    notifQueue : Subject<any> = new Subject<any>();

    constructor() {}

    public push(notif : NotificationSettings){

        if( this.notifQueue.observers.length > 0 ) {
            this.notifQueue.next(notif);
        } else {
            this.notifs.push(notif);
        }
    }



    public getNotifications() : NotificationSettings[] {
        return this.notifs;
    }



    public subscribe(observer) {
        let s = this.notifQueue.subscribe(observer);
        this.notifs.forEach(notif => this.notifQueue.next(notif));
        this.notifs = [];
        return s;
    }


}
