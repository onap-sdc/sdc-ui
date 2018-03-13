import {Component, Input, Output, EventEmitter, OnInit, ViewContainerRef, ViewChild} from "@angular/core";
import {NotificationSettings} from "../utilities/notification.config";
import {CreateDynamicComponentService} from "../../utils/create-dynamic-component.service";
import template from "./notification.component.html";

@Component({
    selector: 'sdc-notification',
    template
})

export class NotificationComponent implements OnInit {

    @Input() public notificationSetting: NotificationSettings;
    @Output() public destroyComponent = new EventEmitter<any>();
    @ViewChild("dynamicContentContainer", {read: ViewContainerRef}) public contentContainer: ViewContainerRef;
    private fade: boolean = false;

    constructor(private createDynamicComponentService: CreateDynamicComponentService) {
    }

    public ngOnInit() {
        if (this.notificationSetting.hasCustomContent) {
            this.createDynamicComponentService.insertComponentDynamically(
                this.notificationSetting.innerComponentType,
                this.notificationSetting.innerComponentOptions,
                this.contentContainer);
        }

        if (!this.notificationSetting.sticky) {
            setTimeout(() => this.fadeOut(), this.notificationSetting.duration);
        }
    }

    private fadeOut = (): void => {
        this.fade = true;
    }

    private destroyMe() {
        /*Only destroy on fade out, not on entry animation */
        if (this.fade) {
            this.destroyComponent.emit(this.notificationSetting);
        }
    }

}
