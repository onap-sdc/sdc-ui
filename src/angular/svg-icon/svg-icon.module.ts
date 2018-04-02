import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SvgIconComponent } from "./svg-icon.component";
import { SvgIconLabelComponent } from "./svg-icon-label.component";

@NgModule({
    declarations: [
        SvgIconComponent,
        SvgIconLabelComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SvgIconComponent,
        SvgIconLabelComponent
    ],
})

export class SvgIconModule {
}
