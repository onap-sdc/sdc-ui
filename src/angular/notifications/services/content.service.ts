import {
    Injectable, Type, ComponentRef, ComponentFactory, ComponentFactoryResolver
} from '@angular/core';
import {NotificationComponent} from "../notification/notification.component";


@Injectable()
export class ContentService {

    private currentNotification:ComponentRef<NotificationComponent>;
    private innerNotificationContent:ComponentRef<any>;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    // public addCustomContent = (contentComponentType:Type<any>, options:any = {}) => {
    //     // this.currentNotification = currentNotification;
    //     const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(contentComponentType);
    //     this.innerNotificationContent = this.currentNotification.   createComponent(factory);
    //     this.projectComponentInputs(this.innerNotificationContent, options);
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

    public getInnerContentInstance = ()=> {
        return this.innerNotificationContent.instance;
    }

    public destroyContent = ()=> {
        this.currentNotification.destroy();
    }

}


