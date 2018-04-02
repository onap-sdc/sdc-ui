import { Directive, Input, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: `[SdcRippleClickAnimation]`
})
export class RippleClickAnimationDirective {

    private animated: boolean;

    @Input() rippleClickDisabled: boolean;

    @HostBinding('class.sdc-ripple-click__animated') animationClass: string;
    @HostListener('click') onClick() {
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
