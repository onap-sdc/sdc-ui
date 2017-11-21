import {Component, Input, Output} from '@angular/core';
import {TooltipPlacement} from './tooltip.directive';

@Component({
    selector: 'test-tooltip-component',
    templateUrl: './test.tooltip.component.html',
})

export class TestTooltipComponent {
    tooltipText = 'This is the tooltip test';
    tooltipPlacement = TooltipPlacement.Right;
    tooltipCssClass = 'custom-tooltip';
    tooltipDisabled = false;
}
