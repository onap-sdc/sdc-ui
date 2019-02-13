import { Component, EventEmitter, Input, Output, forwardRef, OnChanges, SimpleChanges, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, Renderer } from '@angular/core';
import { IDropDownOption, DropDownOptionType, DropDownTypes } from "./dropdown-models";
import { ValidatableComponent } from './../validation/validatable.component';
import template from './dropdown.component.html';

@Component({
    selector: 'sdc-dropdown',
    template: template
})
export class DropDownComponent extends ValidatableComponent implements OnChanges, OnInit {

    @Output('changed') changeEmitter:EventEmitter<IDropDownOption> = new EventEmitter<IDropDownOption>();
    @Input() label: string;
    @Input() options: IDropDownOption[];
    @Input() disabled: boolean;
    @Input() placeHolder: string;
    @Input() required: boolean;
    @Input() maxHeight: number;
    @Input() selectedOption: IDropDownOption;
    @Input() type: DropDownTypes = DropDownTypes.Regular;
    @Input() testId: string;
    @ViewChild('dropDownWrapper') dropDownWrapper: ElementRef;
    @ViewChild('optionsContainerElement') optionsContainerElement: ElementRef;
    @HostListener('document:click', ['$event']) onClick(e) {
        this.onClickDocument(e);
    }

    private bottomVisible = true;
    private myRenderer: Renderer;

    // Drop-down show/hide flag. default is false (closed)
    public show = false;

    // Export DropDownOptionType enum so we can use it on the template
    public cIDropDownOptionType = DropDownOptionType;
    public cIDropDownTypes = DropDownTypes;

    // Configure unselectable option types
    private unselectableOptions = [
        DropDownOptionType.Disable,
        DropDownOptionType.Header,
        DropDownOptionType.HorizontalLine
    ];

    // Set or unset Group style on drop-down
    public isGroupDesign = false;
    public animation_init = false;
    public allOptions: IDropDownOption[];
    public filterValue: string;

    constructor(public renderer: Renderer) {
        super();
        this.myRenderer = renderer;
        this.maxHeight = 244;
        this.filterValue = '';
    }

    ngOnInit(): void {
        if (this.options) {
            this.allOptions = this.options;
            if (this.options.find(option => option.type === DropDownOptionType.Header)) {
                this.isGroupDesign = true;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        if (changes.selectedOption && changes.selectedOption.currentValue !== changes.selectedOption.previousValue) {
            if (typeof changes.selectedOption.currentValue === 'string' && this.isSelectable(changes.selectedOption.currentValue)) {
                this.setSelected(changes.selectedOption.currentValue);
            } else if (this.isSelectable(changes.selectedOption.currentValue.value)) {
                this.setSelected(changes.selectedOption.currentValue.value);
            } else {
                this.setSelected(undefined);
            }
        }
    }

    public getValue(): any {
        return this.selectedOption && this.selectedOption.value;
    }

    public selectOption = (option: IDropDownOption | string, event?): void => {
        if (event) { event.stopPropagation(); }
        if (this.type === DropDownTypes.Headless) {
            // Hide the options when in headless mode and user select option.
            this.myRenderer.setElementStyle(this.dropDownWrapper.nativeElement, 'display', 'none');
        }
        if (typeof option === 'string' && this.isSelectable(option)) {
            this.setSelected(option);
        } else if (this.isSelectable((option as IDropDownOption).value)) {
            this.setSelected((option as IDropDownOption).value);
        }
    }

    public toggleDropdown = (event?): void => {
        if (event) { event.stopPropagation(); }
        if (this.type === DropDownTypes.Headless) {
            // Show the options when in headless mode.
            this.myRenderer.setElementStyle(this.dropDownWrapper.nativeElement, 'display', 'block');
        }
        if (this.disabled) { return; }
        this.animation_init = true;
        this.bottomVisible = this.isBottomVisible();
        this.show = !this.show;
    }

    public filterOptions = (filterValue): void => {
        if (filterValue.length >= 1 && !this.show) { this.toggleDropdown(); }
        if (this.selectedOption) { this.selectedOption = null; }
        this.options = this.allOptions.filter((option) => {
            return option.value.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
        });
    }

    private isSelectable = (value: string): boolean => {
        const option: IDropDownOption = this.options.find(o => o.value === value);
        if (!option) { return false; }
        if (!option.type) { return true; }
        return !this.unselectableOptions.find(optionType => optionType === option.type);
    }

    private setSelected = (value: string): void => {
        this.selectedOption = this.options.find(o => o.value === value);
        if (this.type === DropDownTypes.Auto) { this.filterValue = value; }
        this.show = false;
        this.changeEmitter.next(this.selectedOption);
    }

    private isBottomVisible = (): boolean => {
        const windowPos = window.innerHeight + window.pageYOffset;
        const boundingRect = this.dropDownWrapper.nativeElement.getBoundingClientRect();
        const dropDownPos = boundingRect.top + boundingRect.height + this.maxHeight;
        return windowPos > dropDownPos;
    }

    private onClickDocument = (event): void => {
        if (this.type === DropDownTypes.Headless) {
            if (!this.optionsContainerElement.nativeElement.contains(event.target)) {
                this.show = false;
            }
        } else {
            if (!this.dropDownWrapper.nativeElement.contains(event.target)) {
                this.show = false;
            }
        }
    }

}
