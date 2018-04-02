import { Component, Input } from "@angular/core";
import { SvgIconComponent } from './svg-icon.component';
import { Mode, Size, Placement } from "../common/enums";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
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
export class SvgIconLabelComponent extends SvgIconComponent {

    @Input() public label: string;
    @Input() public labelPlacement: Placement;
    @Input() public labelClassName: string;

    constructor(protected domSanitizer: DomSanitizer) {
        super(domSanitizer);
        this.labelPlacement = Placement.left;
    }
}
