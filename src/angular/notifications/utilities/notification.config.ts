import { Type, ComponentRef } from '@angular/core';

export type NotificationType =
    "info" | "warn" | "error" | "success";

export class NotificationSettings {
    public position: string;
    public duration: number;
    public type: NotificationType;
    public location: string;
    public sticky: boolean;
    public notifyText: string;
    public notifyTitle: string;
    public hasNgContent :boolean = false;
    public componentRef: string;
    public options : string = "";

    constructor(postion: string, duration: number, type: NotificationType, location: string, sticky: boolean, notifyText: string, notifyTitle: string, hasNgContent :boolean, componentRef:string, options :any) {
        this.position = postion;
        this.duration = duration;
        this.type = type;
        this.location = location;
        this.sticky = sticky;
        this.notifyText = notifyText;
        this.notifyTitle = notifyTitle;
        this.hasNgContent = hasNgContent;
        this.componentRef = componentRef;
        this.options = JSON.stringify(options);
    }


}
