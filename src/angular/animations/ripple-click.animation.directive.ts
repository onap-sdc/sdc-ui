import { Directive, Input } from "@angular/core";

@Directive({
    selector: `[ripple-click-animation]`,
    host: {
        '(click)': 'onClickEvent()',
        '[class.sdc-ripple-click__animated]' : 'animated',
        '(animationend)' : 'onAnimationComplete()'
    }
})
export class RippleClickAnimationDirective {

    @Input() rippleClickDisabled:boolean = false;
    private animated:boolean = false;

    private onClickEvent = ():void => {
        if(!this.rippleClickDisabled) {
            this.animated = true;
        }
    }
    private onAnimationComplete = (): void => {
        this.animated = false;
    }

}
