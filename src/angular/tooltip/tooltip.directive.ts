import { Directive, ElementRef, HostListener, OnInit, Input, Renderer, TemplateRef } from '@angular/core';
import { TooltipTemplateComponent } from './tooltip-template.component';
import { CreateDynamicComponentService } from '../utils/create-dynamic-component.service';

const pixel = 'px';
const leftStyle = 'left';
const topStyle = 'top';
const showSuffix = 'show';
const rightBottomSuffix = 'right__bottom';
const centerMiddleSuffix = 'center__middle';

@Directive({
    selector: '[sdc-tooltip]'
})
export class TooltipDirective implements OnInit {
    @Input('tooltip-text') public text = 'tooltip';
    @Input('tooltip-placement') public placement: TooltipPlacement = TooltipPlacement.Top;
    @Input('tooltip-css-class') public customCssClass: string;
    @Input('tooltip-template') public template: TemplateRef<any>;
    @Input('tooltip-arrow-offset') public arrowOffset: number = 10;
    @Input('tooltip-arrow-placement') public arrowPlacement: ArrowPlacement = ArrowPlacement.LeftTop;
    @Input('tooltip-offset') public tooltipOffset: number = 3;

    private cssClass: string = 'sdc-tooltip'; // default css class
    private tooltip: any; // tooltip html element
    private elemPosition: any;
    private tooltipTemplateContainer: any;

    private scrollEventHandler = () => {};

    constructor(
        private elementRef: ElementRef,
        private service: CreateDynamicComponentService,
        private renderer: Renderer) {

        this.elementRef.nativeElement.title = "";
    }

    @HostListener('mouseenter')
    public onMouseEnter() {
        this.show();
        this.activateScrollEvent();
    }

    @HostListener('mouseleave')
    public onMouseLeave() {
        this.hide();
        this.deactivateScrollEvent();
    }

    ngOnInit(): void {
        this.initScrollEvent();
    }

    private get ScreenWidth() {
        return document.documentElement.clientWidth;
    }

    private get ScreenHeight() {
        return document.documentElement.clientHeight;
    }

    private create() {
            this.tooltipTemplateContainer = this.service.createComponentDynamically(TooltipTemplateComponent, document.body);

            /**
             * Creating a view (injecting our template) from template in our component.
             */
            this.tooltip = this.tooltipTemplateContainer.location.nativeElement.querySelector(
                '.sdc-tooltip-template-container');

            if (this.template) {
                this.tooltipTemplateContainer.instance.container.createEmbeddedView(this.template);
            } else {
                this.tooltip.textContent = this.text ? this.text : 'tooltip';
            }

            this.setCssClass(true);
    }

    private destroy() {
        this.tooltipTemplateContainer.destroy();
        this.tooltip = null;
    }

    private show() {
        this.create();

        /**
         *  View is ready (AfterViewInit event in template component)
         */
        this.tooltipTemplateContainer.instance.viewReady.subscribe((isReady) => {
           if (isReady) {
               this.setPosition();
               this.toggleShowCssClass(true); // add css class
           }
        });
    }

    private hide() {
        this.toggleShowCssClass(false); // remove css class

        this.destroy();
    }

    private toggleShowCssClass(isAdd: boolean) {
        if (this.tooltip) {
            this.setCssClass(isAdd, '-' + showSuffix);
        }
    }

    /**
     * Adds placement css class and sets tooltip position in style
     */
    private setPosition() {
        const tooltipPos: IPlacementData = this.getPlacementData();

        const placementSuffix: string = TooltipPlacement[tooltipPos.placement].toLowerCase();

        this.setCssClass(true, '-' + placementSuffix);

        this.setAdditionalCssClass(placementSuffix);

        this.renderer.setElementStyle(this.tooltip, topStyle, tooltipPos.top + pixel);
        this.renderer.setElementStyle(this.tooltip, leftStyle, tooltipPos.left + pixel);
    }

    private setAdditionalCssClass(placementSuffix: string) {
        if (this.arrowPlacement === ArrowPlacement.RightBottom) {
            this.setCssClass(true, '-' + placementSuffix + '-' + rightBottomSuffix);
        } else if (this.arrowPlacement === ArrowPlacement.CenterMiddle) {
            this.setCssClass(true, '-' + placementSuffix + '-' + centerMiddleSuffix);
        }
    }

    private setCssClass(isAdd: boolean, suffix: string = '') {
        this.renderer.setElementClass(this.tooltip, this.cssClass + suffix, isAdd);

        if (this.customCssClass) {
            this.renderer.setElementClass(this.tooltip, this.customCssClass + suffix, isAdd);
        }
    }

    /**
     * Checks the specified placement (first element in array), if it is not valid - checks other placements
     * @returns {IPlacementData}
     */
    private getPlacementData(): IPlacementData {
        const placement: TooltipPlacement = this.placement;
        let tooltipPos: IPlacementData;

        const tooltipPosWithPlacement = this.getPlacement.bind(this, placement);

        // TODO add comments - done
        switch (placement) {
            case TooltipPlacement.Left:
                tooltipPos = tooltipPosWithPlacement(
                    TooltipPlacement.Right,
                    TooltipPlacement.Top,
                    TooltipPlacement.Bottom);
                break;

            case TooltipPlacement.Right:
                tooltipPos = tooltipPosWithPlacement(
                    TooltipPlacement.Left,
                    TooltipPlacement.Top,
                    TooltipPlacement.Bottom);
                break;

            case TooltipPlacement.Top:
                tooltipPos = tooltipPosWithPlacement(
                    TooltipPlacement.Bottom,
                    TooltipPlacement.Left,
                    TooltipPlacement.Right);
                break;

            case TooltipPlacement.Bottom:
                tooltipPos = tooltipPosWithPlacement(
                    TooltipPlacement.Top,
                    TooltipPlacement.Left,
                    TooltipPlacement.Right);
                break;
        }

        return tooltipPos;
    }

    /**
     * Returns valid tooltip position data
     * @param {TooltipPlacement} placement
     * @param {TooltipPlacement} additionalPlacements
     * @returns {IPlacementData}
     */
    private getPlacement(placement: TooltipPlacement,
                         ...additionalPlacements: TooltipPlacement[]
                         ): IPlacementData {
        const placements: TooltipPlacement[] = [placement, ...additionalPlacements];
        const filterPlacements = placements
            .map((pl) => this.getPosition(pl))
            .filter((item) => this.validatePosition(item));
        return filterPlacements.length > 0 ? filterPlacements[0] : this.getPosition(placement);
    }

    /**
     * Returns input data for getPosition method
     * @returns {ITooltipPositionParams}
     */
    private getPlacementInputParams(): ITooltipPositionParams {
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();

        return {
            elemHeight: this.elementRef.nativeElement.offsetHeight,
            elemLeft: this.elemPosition.left,
            elemTop: this.elemPosition.top,
            elemWidth: this.elementRef.nativeElement.offsetWidth,
            pageYOffset: window.pageYOffset,
            tooltipHeight: this.tooltip.offsetHeight, // .clientHeight,
            tooltipOffset: this.tooltipOffset,
            tooltipWidth: this.tooltip.offsetWidth,
            arrowOffset: this.arrowOffset
        };
    }

    /**
     * Returns tooltip position data
     * @param {TooltipPlacement} placement (left, top, right, bottom)
     * @returns {IPlacementData}
     */
    private getPosition(placement: TooltipPlacement): IPlacementData {
        switch(this.arrowPlacement) {
            case ArrowPlacement.LeftTop:
                return this.getLeftTopPosition(placement);

            case ArrowPlacement.RightBottom:
                return this.getRightBottomPosition(placement);
        }

        return this.getCenterMiddlePosition(placement);
    }

    /**
     * Returns tooltip position data (center / middle arrow)
     * @param {TooltipPlacement} placement (left, top, right, bottom)
     * @returns {IPlacementData}
     */
    private getCenterMiddlePosition(placement: TooltipPlacement): IPlacementData {
        let left = 0;
        let top = 0;

        const inputPos: ITooltipPositionParams = this.getPlacementInputParams();
        switch (placement) {
            case TooltipPlacement.Left:
                left = inputPos.elemLeft - inputPos.tooltipWidth - inputPos.tooltipOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight / 2 - inputPos.tooltipHeight / 2;
                break;

            case TooltipPlacement.Right:
                left = inputPos.elemLeft + inputPos.elemWidth + inputPos.tooltipOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight / 2 - inputPos.tooltipHeight / 2;
                break;

            case TooltipPlacement.Top:
                left = inputPos.elemLeft + inputPos.elemWidth / 2 - inputPos.tooltipWidth / 2;
                top = inputPos.elemTop + inputPos.pageYOffset - inputPos.tooltipHeight - inputPos.tooltipOffset;
                break;

            case TooltipPlacement.Bottom:
                left = inputPos.elemLeft + inputPos.elemWidth / 2 - inputPos.tooltipWidth / 2;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight + inputPos.tooltipOffset;
                break;
        }

        return {
            height: inputPos.tooltipHeight,
            left,
            placement,
            top,
            width: inputPos.tooltipWidth,
            pageYOffset: inputPos.pageYOffset
        } as IPlacementData;
    }

    /**
     * Returns tooltip position data (left / top arrow)
     * @param {TooltipPlacement} placement (left, top, right, bottom)
     * @returns {IPlacementData}
     */
    private getLeftTopPosition(placement: TooltipPlacement): IPlacementData {
        let left = 0;
        let top = 0;

        const inputPos: ITooltipPositionParams = this.getPlacementInputParams();
        switch (placement) {
            case TooltipPlacement.Left:
                left = inputPos.elemLeft - inputPos.tooltipWidth - inputPos.tooltipOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight / 2 - inputPos.arrowOffset;
                break;

            case TooltipPlacement.Right:
                left = inputPos.elemLeft + inputPos.elemWidth + inputPos.tooltipOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight / 2 - inputPos.arrowOffset;
                break;

            case TooltipPlacement.Top:
                left = inputPos.elemLeft + inputPos.elemWidth / 2 - inputPos.arrowOffset;
                top = inputPos.elemTop + inputPos.pageYOffset - inputPos.tooltipHeight - inputPos.tooltipOffset;
                break;

            case TooltipPlacement.Bottom:
                left = inputPos.elemLeft + inputPos.elemWidth / 2 - inputPos.arrowOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight + inputPos.tooltipOffset;
                break;
        }

        return {
            height: inputPos.tooltipHeight,
            left,
            placement,
            top,
            width: inputPos.tooltipWidth,
            pageYOffset: inputPos.pageYOffset
        } as IPlacementData;
    }

    /**
     * Returns tooltip position data (right / bottom arrow)
     * @param {TooltipPlacement} placement (left, top, right, bottom)
     * @returns {IPlacementData}
     */
    private getRightBottomPosition(placement: TooltipPlacement): IPlacementData {
        let left = 0;
        let top = 0;

        const inputPos: ITooltipPositionParams = this.getPlacementInputParams();
        switch (placement) {
            case TooltipPlacement.Left:
                left = inputPos.elemLeft - inputPos.tooltipWidth - inputPos.tooltipOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight / 2 - inputPos.tooltipHeight + inputPos.arrowOffset;
                break;

            case TooltipPlacement.Right:
                left = inputPos.elemLeft + inputPos.elemWidth + inputPos.tooltipOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight / 2 - inputPos.tooltipHeight + inputPos.arrowOffset;
                break;

            case TooltipPlacement.Top:
                left = inputPos.elemLeft + inputPos.elemWidth / 2 - inputPos.tooltipWidth + inputPos.arrowOffset;
                top = inputPos.elemTop + inputPos.pageYOffset - inputPos.tooltipHeight - inputPos.tooltipOffset;
                break;

            case TooltipPlacement.Bottom:
                left = inputPos.elemLeft + inputPos.elemWidth / 2 - inputPos.tooltipWidth + inputPos.arrowOffset;
                top = inputPos.elemTop + inputPos.pageYOffset + inputPos.elemHeight + inputPos.tooltipOffset;
                break;
        }

        return {
            height: inputPos.tooltipHeight,
            left,
            placement,
            top,
            width: inputPos.tooltipWidth,
            pageYOffset: inputPos.pageYOffset
        } as IPlacementData;
    }

    /**
     * Checks if tooltip position is valid
     * @param {IPlacementData} pos
     * @returns {boolean}
     */
    private validatePosition(pos: IPlacementData): boolean {
        if (pos.left < 0 || pos.left + pos.width - 1 > this.ScreenWidth) {
            return false;
        }

        if (pos.top - pos.pageYOffset < 0 || pos.top - pos.pageYOffset + pos.height - 1 > this.ScreenHeight) {
            return false;
        }

        return true;
    }

    /**
     * Scrolling
     */

    private debounce(func: Function, wait: number, immediate?: boolean) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = () => {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    }

    private initScrollEvent() {
        this.scrollEventHandler = this.debounce(() => {
            try {
                this.setPosition();
            } catch (e) {

            }
        }, 10);
    }

    private activateScrollEvent() {
        window.addEventListener('scroll', this.scrollEventHandler , true);
    }

    private deactivateScrollEvent() {
        window.removeEventListener('scroll', this.scrollEventHandler , true);
    }
}

export enum TooltipPlacement {
    Left,
    Right,
    Top,
    Bottom
}

export enum ArrowPlacement {
    CenterMiddle,
    LeftTop,
    RightBottom
}

interface ITooltipPositionParams {
    elemLeft: number;
    elemTop: number;
    elemWidth: number;
    elemHeight: number;
    tooltipWidth: number;
    tooltipHeight: number;
    tooltipOffset: number;
    pageYOffset: number;
    arrowOffset: number;
}

interface IPlacementData {
    left: number;
    top: number;
    width: number;
    height: number;
    pageYOffset: number;
    placement?: TooltipPlacement;
}
