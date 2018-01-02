import {IconsComponent, SafeHtmlPipe} from "./icons.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";



@NgModule({
    declarations: [
        IconsComponent,
        SafeHtmlPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IconsComponent,
        SafeHtmlPipe
    ],
})

export class IconsModule {

}
