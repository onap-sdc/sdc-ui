import {
    Directive, ElementRef, HostListener, Input, Renderer, AfterViewInit, TemplateRef,
    ViewContainerRef, ComponentFactoryResolver, ViewChild
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import {TooltipTemplateComponent} from './tooltip-template.component';

const pixel = 'px';
const leftStyle = 'left';
const topStyle = 'top';
const showSuffix = 'show';

@Directive({
    selector: '[sdc-tooltip]'
})
export class TooltipDirective implements AfterViewInit {

    @Input('tooltip-text') public text = 'tooltip';
    @Input('tooltip-placement') public placement: TooltipPlacement = TooltipPlacement.Top;
    @Input('tooltip-disabled') public disabled = false;
    @Input('tooltip-css-class') public customCssClass: string;
    @Input('tooltip-template') public template: TemplateRef<any>;

    private cssClass: string = 'sdc-tooltip'; // default css class
    private parentElement: any;
    private tooltip: any; // tooltip html element
    private elemPosition: any;
    private tooltipOffset: number = 8;
    private tooltipTemplateContainer: any;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        /**
         * ViewContainerRef: Represents a container where one or more Views can be attached to.
         * When created on constructor, refers to the element we are working on.
         */
        private viewContainer: ViewContainerRef,
        /**
         * ComponentFactoryResolver: A service which allow us to dynamically create component factories and
         * add them to our view (using ViewContainerRef - createComponent method)
         */
        private componentFactory: ComponentFactoryResolver) {
    }

    public ngAfterViewInit() {
        this.parentElement = this.elementRef.nativeElement.parentElement;
    }

    @HostListener('mouseenter')
    public onMouseEnter() {
        if (this.disabled === false) {
            this.show();
        }
    }

    @HostListener('mouseleave')
    public onMouseLeave() {
        if (this.disabled === false) {
            this.hide();
        }
    }

    private get ScreenWidth() {
        return document.documentElement.clientWidth;
    }

    private get ScreenHeight() {
        return document.documentElement.clientHeight;
    }

    private create() {
            /**
             * Creating a factory for our component so we can attach it to our view
             */
            const factory = this.componentFactory.resolveComponentFactory(TooltipTemplateComponent);
            /**
             * Creating and attaching a component to our view, using component factory
             */
            this.tooltipTemplateContainer = this.viewContainer.createComponent(factory);
            /**
             * Creating a view (injecting our template) from template in our component.
             */
            this.tooltip = this.tooltipTemplateContainer.location.nativeElement.querySelector(
                '.sdc-tooltip-template-container');
            if (this.template) {
                this.tooltipTemplateContainer.instance.container.createEmbeddedView(this.template);
            }else {
                // this.tooltipTemplateContainer.instance.addText(this.text ? this.text : 'tooltip');
                this.tooltip.textContent = this.text ? this.text : 'tooltip';
            }
            this.renderer.setElementClass(this.tooltip, this.cssClass, true);
            if (this.customCssClass) {
                this.renderer.setElementClass(this.tooltip, this.customCssClass, true);
            }
    }

    private destroy() {
        this.tooltipTemplateContainer.destroy();
        this.tooltip = null;
    }

    private show() {
        this.create();
        this.setPosition();

        this.toggleShowCssClass(true); // add css class
    }

    private hide() {
        this.toggleShowCssClass(false); // remove css class

        this.destroy();
    }

    private toggleShowCssClass(isAdd: boolean) {
        if (this.tooltip) {
            this.renderer.setElementClass(this.tooltip, this.cssClass + '-' + showSuffix, isAdd);
        }
    }

    /**
     * Adds placement css class and sets tooltip position in style
     */
    private setPosition() {
        const tooltipPos: IPlacementData = this.getPlacementData();

        const placementSuffix: string = TooltipPlacement[tooltipPos.placement].toLowerCase();
        this.renderer.setElementClass(this.tooltip, this.cssClass + '-' + placementSuffix, true);

        this.renderer.setElementStyle(this.tooltip, topStyle, tooltipPos.top + pixel);
        this.renderer.setElementStyle(this.tooltip, leftStyle, tooltipPos.left + pixel);
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
                         ...additionalPlacements: TooltipPlacement[],
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
            tooltipWidth: this.tooltip.offsetWidth
        };
    }

    /**
     * Returns tooltip position data
     * @param {TooltipPlacement} placement (left, top, right, bottom)
     * @returns {IPlacementData}
     */
    private getPosition(placement: TooltipPlacement): IPlacementData {
        let left: number = 0;
        let top: number = 0;

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

        return <IPlacementData> {
            height: inputPos.tooltipHeight,
            left,
            placement,
            top,
            width: inputPos.tooltipWidth
        };

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

        if (pos.top < 0 || pos.top + pos.height - 1 > this.ScreenHeight) {
            return false;
        }

        return true;
    }
}

export enum TooltipPlacement {
    Left,
    Right,
    Top,
    Bottom
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
}

interface IPlacementData {
    left: number;
    top: number;
    width: number;
    height: number;
    placement?: TooltipPlacement;
}
