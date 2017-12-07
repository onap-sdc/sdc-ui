
export type NotificationType =
    "info" | "warn" | "error";

export class NotificationSettings {


    public position: string;
    public duration: number;
    public type: NotificationType;
    public location: string;
    public sticky: boolean;
    public notifyText: string;
    public notifyTitle: string;
    constructor(postion: string, duration: number, type: NotificationType, location: string, sticky: boolean, notifyText: string, notifyTitle: string) {
        this.position = postion;
        this.duration = duration;
        this.type = type;
        this.location = location;
        this.sticky = sticky;
        this.notifyText = notifyText;
        this.notifyTitle = notifyTitle;
    }
}
