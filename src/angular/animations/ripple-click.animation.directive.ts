/**
 * Created by ng689e on 12/21/2017.
 */
import {Directive} from "@angular/core";

@Directive({
    selector: `[ripple-click-animation]`,
    host: {
        '(click)': 'onClickEvent()',
        '[class.sdc-ripple-click__animated]' : 'animated',
        '(animationend)' : 'onAnimationComplete()'
    }
})
export class RippleClickAnimationDirective {

    private animated:boolean = false;

    private onClickEvent = ():void => {
        this.animated = true;
    }
    private onAnimationComplete = (): void => {
        this.animated = false;
    }

}
