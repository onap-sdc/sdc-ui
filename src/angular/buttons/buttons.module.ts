/**
 * Created by ob0695 on 10/9/2017.
 */
import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ButtonComponent

    ],
})
export class ButtonsModule {

}
