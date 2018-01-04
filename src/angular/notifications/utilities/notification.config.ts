import { Type, ComponentRef } from '@angular/core';

export type NotificationType =
    "info" | "warn" | "error" | "success";

export class NotificationSettings {
    public position: string = 'top';
    public duration:number = 10000;
    public type: NotificationType;
    public location: string;
    public sticky: boolean;
    public notifyText: string;
    public notifyTitle: string;
    public hasNgContent :boolean = false;
    public innerComponentType: Type<any>;
    public innerComponentOptions : any;

    constructor(postion: string, duration: number, type: NotificationType, location: string, sticky: boolean, notifyText: string, notifyTitle: string, hasNgContent :boolean, innerComponentType?:Type<any>, innerComponentOptions? :any) {
        this.position = postion;
        this.duration = duration;
        this.type = type;
        this.location = location;
        this.sticky = sticky;
        this.notifyText = notifyText;
        this.notifyTitle = notifyTitle;
        this.hasNgContent = hasNgContent;
        this.innerComponentType = innerComponentType;
        this.innerComponentOptions = innerComponentOptions;
    }


}
