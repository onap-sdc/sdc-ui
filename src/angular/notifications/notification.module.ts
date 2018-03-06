/**
 * Created by ob0695 on 10/9/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationComponent} from "./notification/notification.component";
import {NotificationContainerComponent} from "./container/notifcontainer.component";
import {NotificationsService} from "./services/notifications.service";
import {CreateDynamicComponentService} from "../utils/create-dynamic-component.service";


@NgModule({
    declarations: [
        NotificationComponent,
        NotificationContainerComponent,
    ],
    exports: [
        NotificationComponent,
        NotificationContainerComponent,
    ],
    entryComponents: [
        NotificationComponent,
        NotificationContainerComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [NotificationsService, CreateDynamicComponentService]
})
export class NotificationModule {

}
