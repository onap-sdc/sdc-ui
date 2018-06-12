import {Component, OnChanges, AfterViewChecked, ViewChild, ElementRef, Input, Output, SimpleChanges, EventEmitter} from "@angular/core";
import template from './multiline-ellipsis.component.html';

declare const window:any;

@Component({
	selector: 'multiline-ellipsis',
	template: template
})
export class MultilineEllipsisComponent implements OnChanges, AfterViewChecked {

	@Input() public lines: number;
	@Input() public lineHeight: string;
	@Input() public className: string;
	@Output() public hasEllipsisChanged: EventEmitter<boolean>;

	@ViewChild('multilineEllipsisContainer') public elmContainer: ElementRef;
	@ViewChild('multilineEllipsisContent') public elmContent: ElementRef;

	public stylesContainer: {[key: string]: string};
	public stylesContent: {[key: string]: string};
	public stylesDots: {[key: string]: string};

	private hasEllipsis: boolean;

	public constructor() {
		this.hasEllipsisChanged = new EventEmitter<boolean>();
	}

	public ngOnChanges(changes: SimpleChanges) {
		this.prepareStyles()
	}

	public ngAfterViewChecked() {
		const hasEllipsis = (this.elmContainer.nativeElement.offsetHeight < this.elmContent.nativeElement.offsetHeight);
		if (hasEllipsis !== this.hasEllipsis) {
			this.hasEllipsis = hasEllipsis;
			setTimeout(() => {
                this.hasEllipsisChanged.emit(this.hasEllipsis);
            });
		}
	}

	private prepareStyles() {
		const lineHeight = this.lineHeight || this.getLineHeight();
		this.stylesContainer = {
            'max-height': `calc(${this.lines} * ${lineHeight})`
        };
		this.stylesContent = {
        	'max-height': `calc(${this.lines + 1} * ${lineHeight})`
		};
		this.stylesDots = {
        	'top': `calc(${2 * this.lines} * ${lineHeight} - 100%)`
		};
	}

    private getLineHeight() {
        let lineHeight:number = parseFloat(window.getComputedStyle(this.elmContainer.nativeElement)['line-height']);
        if (!lineHeight) {
            const oneLetterElm = window.document.createElement('div');
            oneLetterElm.innerText = '.';
            this.elmContainer.nativeElement.append(oneLetterElm);
            lineHeight = oneLetterElm.clientHeight;
            this.elmContainer.nativeElement.removeChild(oneLetterElm);
        }
        return `${lineHeight}px`;
    }

}
