/**
 * Created by ng689e on 12/21/2017.
 */
import {NgModule} from "@angular/core";
import {RippleClickAnimationDirective} from "./ripple-click.animation.directive";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        RippleClickAnimationDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RippleClickAnimationDirective

    ],
})
export class AnimationDirectivesModule {

}
