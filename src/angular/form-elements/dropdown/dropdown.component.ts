import {Component, EventEmitter, Input, Output, forwardRef, OnChanges, SimpleChanges, OnInit,
        ElementRef, ViewChild, AfterViewInit} from '@angular/core';

import {IDropDownOption, DropDownOptionType } from "./dropdown-models";
import template from './dropdown.component.html';

@Component({
    selector: 'sdc-dropdown',
    template,
    host: {
        '(document:click)': 'onClickOutside($event)',
    }
})
export class DropDownComponent implements OnChanges, OnInit {

    /**
     * Drop-down value changed event emitter
     */
    @Output('changed') public changeEmitter: EventEmitter<IDropDownOption> = new EventEmitter<IDropDownOption>();

    /**
     * The label that will show up above the drop-down
     */
    @Input() public label: string;

    /**
     * Option can be add by a list of IDropDownOption objects
     */
    @Input() public options: IDropDownOption[];

    /**
     * Drop-down disabled flag
     */
    @Input() public disabled: boolean;

    /**
     * The text users will see on the drop-down header when no option was selected
     */
    @Input() public placeHolder: string;

    /**
     * Drop-down required flag
     */
    @Input() public required: boolean;

    @Input() public validate: boolean;

    /**
     * Show or hie drop-down header flag
     * @type {boolean}
     */
    @Input() public headless = false;

    @Input() public maxHeight: number = 244;

    @ViewChild('dropDownWrapper') public dropDownWrapper: ElementRef;

    @ViewChild('optionsContainerElement') public optionsContainerElement: ElementRef;

    @Input() public selectedOption: IDropDownOption;

    /**
     * Drop-down show/hide flag. default is false (closed)
     * @type {boolean}
     */
    public show = false;

    /**
     * Error flag
     * @type {boolean}
     */
    public error: boolean;

    /**
     * Export DropDownOptionType enum so we can use it on the template
     */
    public cIDropDownOptionType = DropDownOptionType;

    /**
     * Set or unset Group style on drop-down
     * @type {boolean}
     */
    public isGroupDesign = false;

    public animationInit = false;

    /**
     * Configure unselectable option types
     */
    private unselectableOptions = [
        DropDownOptionType.Disable,
        DropDownOptionType.Header,
        DropDownOptionType.HorizontalLine
    ];

    public ngOnInit(): void {
        if (this.options) {
            if (this.options.find((option) => option.type === DropDownOptionType.Header)) {
                this.isGroupDesign = true;
            }
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedOption && this.options.indexOf(this.selectedOption) > -1) {
            this.selectedOption = this.isSelectable(this.selectedOption) && this.selectedOption || null;
        }
    }

    public isValid() {
        return !this.error;
    }

    /**
     * Validate when required is enabled
     */
    public validateDropDown(): void {
        if (!this.disabled && this.required && (!this.selectedOption || this.selectedOption.value === '')) {
            this.error = true;
            return;
        }
        this.error = false;
    }

    /**
     * Set option as selected and saves it's index on the list
     * @param index - number
     * @param option - IDropDownItem or string
     */
    public selectOption(index: number, option: IDropDownOption): void {
        if (!this.isSelectable(option)) {
            return;
        }
        this.updateSelected(index);
    }

    private isSelectable(option: IDropDownOption) {
        return !(!!this.unselectableOptions.find((optionType) => optionType === option.type));
    }

    /**
     * Update the value, label and index of the drop down with new ones
     */
    private updateSelected(index: number): void {
        const option = this.options[index];
        if (option) {
            this.selectedOption = option;
            this.show = false;
            this.validateDropDown();
            this.changeEmitter.next(option);
        }
    }

    /**
     * Get the label of the selected option
     */
    public bottomVisible = true;

    public isBottomVisible() {
        const windowPos = window.innerHeight + window.pageYOffset;
        const boundingRect = this.dropDownWrapper.nativeElement.getBoundingClientRect();
        const dropDownPos = boundingRect.top
            + boundingRect.height
            + this.maxHeight;
        return windowPos > dropDownPos;
    }

    /**
     * Toggle show/hide drop-down list
     */
    public toggleDropdown() {
        if (this.disabled) {
            return;
        }
        this.animationInit = true;
        this.bottomVisible = this.isBottomVisible();
        if (!this.disabled) {
            this.show = !this.show;
        }
    }

    /**
     * When users clicks outside the drop-down it will be closed
     */
    public onClickOutside(event) {
        if (this.optionsContainerElement && !this.optionsContainerElement.nativeElement.contains(event.target)
            && !event.target.classList.contains('js-sdc-dropdown--toggle-hook')) {
            this.show = false;
        }
        // console.log("Target", event.target, event.target.classList.contains('js-sdc-dropdown--toggle-hook'));
    }

}
