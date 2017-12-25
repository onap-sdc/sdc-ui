import {IconsComponent, SafeHtmlPipe} from "./icons.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IconSettingsComponent} from "./icon-settings.component";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        IconsComponent,
        IconSettingsComponent,
        SafeHtmlPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        IconsComponent,
        IconSettingsComponent,
        SafeHtmlPipe
    ],
})

export class IconsModule {

}
