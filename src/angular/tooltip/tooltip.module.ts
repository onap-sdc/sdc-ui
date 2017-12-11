/**
 * Created by ob0695 on 10/9/2017.
 */
import {NgModule} from "@angular/core";
import {TooltipContainerComponnet} from "./tooltip.component";
import {TooltipDirective} from "./tooltip.directive";


@NgModule({
    declarations: [
        TooltipContainerComponnet,
        TooltipDirective
    ],
    exports: [
        TooltipContainerComponnet,
        TooltipDirective
    ],
})
export class TooltipModule {

}
