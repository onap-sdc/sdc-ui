import { NgModule } from "@angular/core";
import { PopupMenuListComponent } from "./popup-menu-list.component";
import { PopupMenuItemComponent } from "./popup-menu-item.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        PopupMenuListComponent,
        PopupMenuItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PopupMenuListComponent,
        PopupMenuItemComponent
    ],
})
export class PopupMenuModule {
}
