import { Directive, Input, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: `[SdcRippleClickAnimation]`
})
export class RippleClickAnimationDirective {

    private animated: boolean;

    @Input() rippleClickDisabled: boolean;

    @HostBinding('class') classes = 'sdc-ripple-click__animated'; // 'animated';
    @HostListener('click') onClick() {
        if (!this.rippleClickDisabled) {
            this.animated = true;
        }
    }
    @HostListener('animationend') onAnimationComplete() {
        this.animated = false;
    }

    constructor() {
        this.rippleClickDisabled = false;
        this.animated = false;
    }

}
