import {Injectable, ApplicationRef, ComponentFactoryResolver, ComponentRef, ViewContainerRef, Injector, EmbeddedViewRef} from '@angular/core';
import {NotificationSettings, NotificationType}  from '../utilities/notification.config'
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NotificationsService  {

    notifs : NotificationSettings[] = [];

    notifQueue : Subject<any> = new Subject<any>();

    constructor() {

        let self = this;
        this.test0();
        setInterval(function(){
            self.test1(); },
            9000);
        setInterval(function(){
                self.test2(); },
            18000);
    }


    private test0(){
        this.push(new NotificationSettings('top-right', 5000, "warn", '', false, 'notif warn message test#0', 'Notif Title Warn'));
        this.push(new NotificationSettings('top-right', 5000, "error", '', false, 'notif error message comes here of test#0', 'Notif Title Error'));
        this.push(new NotificationSettings('top-right', 5000, "info", '', false, 'notif info message comes here of test#0', 'Notif Title Info'));
    }


    private test1(){
        this.push(new NotificationSettings('top-right', 5000, "warn", '', false, 'notif warn message test#1', 'Notif Title Warn'));
    }

    private test2(){
        this.push(new NotificationSettings('top-right', 5000, "error", '', false, 'notif error message comes here of test#2', 'Notif Title Error 2'));
    }



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
