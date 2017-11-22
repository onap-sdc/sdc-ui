import {Directive, ElementRef, HostListener, Input, AfterViewInit, Renderer} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";


@Directive({
    selector: '[sdc-tooltip]'
})
export class TooltipDirective implements AfterViewInit {

    @Input('tooltip-text') text = 'tooltip';
    @Input('tooltip-placement') placement = 'top';
    @Input('tooltip-disabled') disabled = false;
    @Input('tooltip-css-class') cssClass = 'sdc-tooltip';
    @Input('tooltip-show-delay') showDelay = 0; // msec
    @Input('tooltip-hide-delay') hideDelay = 0; // msec

    private parentElement: any;
    private tooltip: any; // tooltip html element
    private elemPosition: any;
    private tooltipOffset: number = 8;

    private tooltipLeft: number = 0;
    private tooltipTop: number = 0;

    private showTimeoutId;
    private hideTimeoutId;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        Observable.fromEvent(window, 'resize')
            .debounceTime(1000)
            .subscribe((event) => {
                //console.log('resize', event);

                if (this.tooltip) {
                    this.setPosition();
                }
            });
    }

    ngAfterViewInit() {
        this.parentElement = this.elementRef.nativeElement.parentElement;
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        if (this.disabled === false) {
            this.show();
        }
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.disabled === false) {
            this.hide();
        }
    }

    create() {
        //this.tooltip = document.createElement('span');
        //this.tooltip = this.renderer.createElement('span');

        this.tooltip = this.renderer.createElement(this.elementRef.nativeElement, 'span');


        //this.renderer.addClass(this.tooltip, this.cssClass); // app-tooltip

        this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass,true);

        this.tooltip.textContent = this.text ? this.text : 'tooltip';

        //document.body.appendChild(this.tooltip);
        this.elementRef.nativeElement.appendChild(this.tooltip);



    }

    destroy() {
        //this.tooltip.parentNode.removeChild(this.tooltip);
        //this.renderer.removeChild(this.parentElement, this.tooltip);
        this.elementRef.nativeElement.removeChild(this.tooltip);
        this.tooltip = null;
    }

    show() {
        this.create();
        this.setPosition();

        this.showTimeoutId = setTimeout(() => {
            if (this.showTimeoutId) {
                clearTimeout(this.showTimeoutId);
            }

            if (this.tooltip) {
                //this.renderer.addClass(this.tooltip, this.cssClass + '-show');

                this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass + '-show',true);
            }
        }, this.showDelay);
    }

    hide() {
        this.hideTimeoutId = setTimeout(() => {
            if (this.hideTimeoutId) {
                clearTimeout(this.hideTimeoutId);
            }

            if (this.tooltip) {
                //this.renderer.removeClass(this.tooltip, this.cssClass + '-show');
                this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass,false);
            }

            this.destroy();
        }, this.hideDelay);
    }

    setPosition() {
        let placement = this.placement;

        if (!this.getPosition(placement)) {
            placement = 'left';
            if (!this.getPosition(placement)) {
                placement = 'right';
                if (!this.getPosition(placement)) {
                    placement = 'top';
                    if (!this.getPosition(placement)) {
                        placement = 'bottom';
                        if (!this.getPosition(placement)) {
                            placement = this.placement;
                        }
                    }
                }
            }
        }

        //this.renderer.addClass(this.tooltip, this.cssClass + '-' + placement);
        this.renderer.setElementClass(this.elementRef.nativeElement, this.cssClass + '-' + placement,true);

        this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', this.tooltipLeft + 'px');
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', this.tooltipTop + 'px');

        // this.renderer.setStyle(this.tooltip, 'left', this.tooltipLeft + 'px');
        // this.renderer.setStyle(this.tooltip, 'top', this.tooltipTop + 'px');
    }

    getPosition(placement: string): boolean {
        let elemWidth = this.elementRef.nativeElement.offsetWidth;
        let elemHeight = this.elementRef.nativeElement.offsetHeight;
        let tooltipWidth = this.tooltip.offsetWidth;
        let tooltipHeight = this.tooltip.clientHeight;
        let scrollY = window.pageYOffset;

        let left: number = 0;
        let top: number = 0;

        let screenWidth = document.documentElement.clientWidth;
        let screenHeight = document.documentElement.clientHeight;

        let ret: boolean = true;

        switch (placement) {
            case 'left':
                left = this.elemPosition.left - tooltipWidth - this.tooltipOffset;
                top = this.elemPosition.top + scrollY + elemHeight / 2 - tooltipHeight / 2;
                break;

            case 'right':
                left = this.elemPosition.left + elemWidth + this.tooltipOffset;
                top = this.elemPosition.top + scrollY + elemHeight / 2 - tooltipHeight / 2;
                break;

            case 'top':
                left = this.elemPosition.left + elemWidth / 2 - tooltipWidth / 2;
                top = this.elemPosition.top + scrollY - tooltipHeight - this.tooltipOffset;
                break;

            case 'bottom':
                left = this.elemPosition.left + elemWidth / 2 - tooltipWidth / 2;
                top = this.elemPosition.top + scrollY + elemHeight + this.tooltipOffset;
                break;
        }

        if (left < 0 || left + tooltipWidth - 1 > screenWidth) {
            ret = false;
        }

        if (top < 0 || top + tooltipHeight - 1 > screenHeight) {
            ret = false;
        }

        this.tooltipLeft = left;
        this.tooltipTop = top;

        return ret;
    }
}


