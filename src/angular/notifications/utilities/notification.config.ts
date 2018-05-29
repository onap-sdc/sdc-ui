import { Type, ComponentRef } from '@angular/core';

export type NotificationType =
    "info" | "warning" | "error" | "success";

export class NotificationSettings {
    
    public type: NotificationType;
    public notifyText: string;
    public notifyTitle: string;
    public sticky: boolean;
    public hasCustomContent :boolean;
    public duration:number;
    public innerComponentType: Type<any>;
    public innerComponentOptions : any;

    constructor(type: NotificationType, notifyText: string, notifyTitle: string, duration: number = 10000, sticky: boolean = false, hasCustomContent:boolean = false, innerComponentType?:Type<any>, innerComponentOptions? :any) {

        this.type = type;
        this.notifyText = notifyText;
        this.notifyTitle = notifyTitle;
        this.duration = duration;
        this.sticky = sticky;
        this.hasCustomContent = hasCustomContent;
        this.innerComponentType = innerComponentType;
        this.innerComponentOptions = innerComponentOptions;
    }


}
