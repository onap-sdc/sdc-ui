import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Mode, Size } from "../common/enums";
import iconsMap from '../../common/icons-map';
import template from './svg-icon.component.html';

@Component({
    selector: 'svg-icon',
    template: template,
    styles: [`
        :host {
            display: inline-flex;
        }
    `]
})
export class SvgIconComponent implements OnChanges {
    static get Icons(): {[key: string]: string} {
        return iconsMap;
    }

    @Input() public name: string;
    @Input() public mode: Mode;
    @Input() public size: Size;
    @Input() public disabled: boolean;
    @Input() public clickable: boolean;
    @Input() public className: any;

    public svgIconContent: string;
    public svgIconContentSafeHtml: SafeHtml;
    public svgIconCustomClassName: string;

    constructor(private domSanitizer: DomSanitizer) {
        this.size = Size.medium;
        this.disabled = false;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.name) {
            this.updateSvgIconByName();
        }
    }

    protected updateSvgIconByName() {
        this.svgIconContent = SvgIconComponent.Icons[this.name] || null;
        if (this.svgIconContent) {
            this.svgIconContentSafeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.svgIconContent);
            this.svgIconCustomClassName = '__' + this.name.replace(/\s+/g, '_');
        } else {
            this.svgIconContentSafeHtml = null;
            this.svgIconCustomClassName = 'missing';
        }
    }
}
