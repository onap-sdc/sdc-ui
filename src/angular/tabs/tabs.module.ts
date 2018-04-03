import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormElementsModule } from "../form-elements/form-elements.module";
import { TabsComponent } from "./tabs.component";
import { TabComponent } from './children/tab.component';
import { SvgIconModule } from './../svg-icon/svg-icon.module';

@NgModule({
    declarations: [
        TabsComponent,
        TabComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule
    ],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class TabsModule {
}
