import { Directive, Input, HostBinding, HostListener } from "@angular/core";

export enum RippleAnimationAction {
    CLICK = 0,
    MOUSE_ENTER = 1
};

@Directive({
    selector: `[SdcRippleClickAnimation]`
})
export class RippleClickAnimationDirective {
    private animated: boolean;

    @Input() rippleClickDisabled: boolean;
    @Input() rippleOnAction:RippleAnimationAction = RippleAnimationAction.CLICK;

    @HostBinding('class.sdc-ripple-click__animated') animationClass: string;

    @HostListener('click') onClick() {
        if(this.rippleOnAction === RippleAnimationAction.CLICK){
            this.animateStart();
        }
    }

    @HostListener('mouseenter') onMouseEnter() {
        //console.log("Mouseenter!", this.rippleOnAction);
        if(this.rippleOnAction === RippleAnimationAction.MOUSE_ENTER){
            this.animateStart();
        }
    }

    private animateStart():void{
        if (!this.rippleClickDisabled) {
            this.animated = true;
            this.animationClass = 'sdc-ripple-click__animated';
        }
    }
    @HostListener('animationend') onAnimationComplete() {
        this.animated = false;
        this.animationClass = '';
    }

    constructor() {
        this.rippleClickDisabled = false;
        this.animated = false;
    }
}
