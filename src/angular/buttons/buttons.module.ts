import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../svg-icon/svg-icon.module';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule
    ],
    exports: [
        ButtonComponent

    ],
})
export class ButtonsModule {

}
