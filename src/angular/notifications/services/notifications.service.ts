import {Injectable, ApplicationRef, ComponentFactoryResolver, ComponentRef, ViewContainerRef, Injector, EmbeddedViewRef} from '@angular/core';
import {NotificationSettings, NotificationType}  from '../utilities/notification.config'
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

    // private addCustomContent = (contentComponentType:Type<any>, options:any = {}) : ComponentRef<any> =>{
    //     // this.currentNotification = currentNotification;
    //     const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(contentComponentType);
    //     let innerNotificationContent = this.currentNotification.createComponent(factory);
    //     this.projectComponentInputs(this.innerNotificationContent, options);
    //     return innerNotificationContent;
    // }
    //
    // private projectComponentInputs(component:ComponentRef<any>, options:any):ComponentRef<any> {
    //     if (options) {
    //         const props = Object.getOwnPropertyNames(options);
    //         for (const prop of props) {
    //             component.instance[prop] = options[prop];
    //         }
    //     }
    //     return component;
    // }



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
