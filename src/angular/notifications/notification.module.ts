/**
 * Created by ob0695 on 10/9/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationComponent} from "./notification/notification.component";
import {NotificationContainerComponent} from "./container/notifcontainer.component";
import {NotificationsService} from "./services/notifications.service";
import {NotificationContentComponent} from "./content/content.component";
import {InnerNotifContent} from "../../../stories/ng2-component-lab/components/notification-inner-content-example.component";


@NgModule({
    declarations: [
        NotificationComponent,
        NotificationContainerComponent,
    ],
    exports: [
        NotificationComponent,
        NotificationContainerComponent
    ],
    entryComponents: [
        NotificationComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [NotificationsService]
})
export class NotificationModule {

}
