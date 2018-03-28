import {Component, Input} from "@angular/core";
import {Mode, Size, Placement} from "../common/enums";
import template from './svg-icon-label.component.html';

@Component({
    selector: 'svg-icon-label',
    template: template,
    styles: [`
        :host {
            display: inline-flex;
        }
    `]
})
export class SvgIconLabelComponent {
    // svg-icon attributes
    @Input() public name: string;

    @Input() public mode: Mode;
    @Input() public size: Size;
    @Input() public disabled: boolean;
    @Input() public clickable: boolean;
    @Input() public className: string;

    @Input() public label: string;
    @Input() public labelPlacement: Placement;
    @Input() public labelClassName: string;

    constructor() {
        this.size = Size.medium;
        this.disabled = false;
        this.labelPlacement = Placement.left;
    }
}
