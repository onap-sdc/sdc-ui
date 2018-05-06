/**
 * Created by M.S.BIT on 26/04/2018.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {AccordionComponent} from "./accordion.component";
import {SvgIconModule} from "../svg-icon/svg-icon.module";

@NgModule({
    declarations: [
        AccordionComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule
    ],
    exports: [
        AccordionComponent
    ],
})
export class AccordionModule {

}
