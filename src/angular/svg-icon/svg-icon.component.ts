import { Component, Input, OnChanges, SimpleChanges, HostBinding } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Mode, Size, BackgroundShape, BackgroundColor } from "../common/enums";
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

    @Input() public name: string;
    @Input() public mode: Mode;
    @Input() public size: Size;
    @Input() public backgroundShape: BackgroundShape;
    @Input() public backgroundColor: BackgroundColor;
    @Input() public disabled: boolean;
    @Input() public clickable: boolean;
    @Input() public className: any;

    public svgIconContent: string;
    public svgIconContentSafeHtml: SafeHtml;
    public svgIconCustomClassName: string;
    private classes: string;

    constructor(protected domSanitizer: DomSanitizer) {
        this.size = Size.medium;
        this.disabled = false;
    }

    static get Icons(): {[key: string]: string} {
        return iconsMap;
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.updateSvgIconByName();
        this.buildClasses();
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

    private buildClasses = (): void => {
        const _classes = ['svg-icon'];
        if (this.mode) { _classes.push('mode-' + this.mode); }
        if (this.size) { _classes.push('size-' + this.size); }
        if (this.clickable) { _classes.push('clickable'); }
        if (this.svgIconCustomClassName) { _classes.push(this.svgIconCustomClassName); }
        if (this.className) { _classes.push(this.className); }
        if (this.backgroundShape) { _classes.push('bg-type-' + this.backgroundShape); }
        if (this.backgroundShape && this.backgroundColor) {
            _classes.push('bg-color-' + this.backgroundColor);
        } else if (this.backgroundShape && !this.backgroundColor) {
            _classes.push('bg-color-primary');
        }
        this.classes = _classes.join(" ");
    }
}
