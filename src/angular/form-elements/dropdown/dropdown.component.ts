import {
    Component, EventEmitter, Input, Output, forwardRef, OnChanges, SimpleChanges, OnInit,
    ElementRef, ViewChild
} from '@angular/core'

import {
     IDropDownOption,
    DropDownOptionType
} from "./dropdown-models";

@Component({
    selector: 'sdc-dropdown',
    templateUrl: './dropdown.component.html',
    host: {
        '(document:click)': 'onClickOutside($event)',
    }
})
export class DropDownComponent implements OnChanges, OnInit {

    /**
     * Drop-down value changed event emitter
     */
    @Output('changed') changeEmitter:EventEmitter<IDropDownOption> = new EventEmitter<IDropDownOption>();

    /**
     * The label that will show up above the drop-down
     */
    @Input() label: string;

    /**
     * Option can be add by a list of IDropDownOption objects
     */
    @Input() options: IDropDownOption[];

    /**
     * Drop-down disabled flag
     */
    @Input() disabled: boolean;

    /**
     * The text users will see on the drop-down header when no option was selected
     */
    @Input() placeHolder:string;

    /**
     * Drop-down required flag
     */
    @Input() required:boolean;

    @Input() validate:boolean;

    /**
     * Show or hie drop-down header flag
     * @type {boolean}
     */
    @Input() headless = false;

    @Input() maxHeight:number = 244;

    @ViewChild('dropDownWrapper') dropDownWrapper: ElementRef;

    @ViewChild('optionsContainerElement') optionsContainerElement: ElementRef;

    @Input() selectedOption: IDropDownOption;

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
     * Configure unselectable option types
     */
    private unselectableOptions = [
        DropDownOptionType.Disable,
        DropDownOptionType.Header,
        DropDownOptionType.HorizontalLine
    ];

    /**
     * Set or unset Group style on drop-down
     * @type {boolean}
     */
    public isGroupDesign = false;


    ngOnInit(): void {
        if(this.options){
            if(this.options.find(option => option.type === DropDownOptionType.Header)){
                this.isGroupDesign = true;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.selectedOption && this.options.indexOf(this.selectedOption) > -1){
            this.selectedOption = this.isSelectable(this.selectedOption) && this.selectedOption || null;
        }
    }

    public isValid(){
        return !this.error;
    }

    private isSelectable(option: IDropDownOption){
        return !(!!this.unselectableOptions.find(optionType => optionType == option.type))
    }

    /**
     * Validate when required is enabled
     */
    public validateDropDown(): void{
        if(!this.disabled && this.required && (!this.selectedOption || this.selectedOption.value === '')){
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
    public selectOption(index: number, option:any):void{
        if(!this.isSelectable(option)){
            return;
        }
        this.updateSelected(index);
    }

    /**
     * Update the value, label and index of the drop down with new ones
     */
    private updateSelected(index: number):void{
        const option = this.options[index];
        if(option){
            this.selectedOption = option;
            this.show = false;
            this.validateDropDown();
            this.changeEmitter.next(option);
        }
    }

    /**
     * Get the label of the selected option
     */
    public getSelectedLabel(): string{
       return this.selectedOption && this.getOptionLabel(this.selectedOption) || null;

    }

    public getOptionLabel(option: IDropDownOption){
        return option.label || String(option.value);
    }

    public isBottomVisible(){
        const windowPos = window.innerHeight + window.pageYOffset;
        const dropDownPos = this.dropDownWrapper.nativeElement.offsetTop
            + this.dropDownWrapper.nativeElement.offsetHeight
            + this.maxHeight;

        return windowPos > dropDownPos;
    }

    /**
     * Toggle show/hide drop-down list
     */
    public toggleDropdown(){
        if(!this.disabled){
            this.show = !this.show;
        }
    }

    /**
     * When users clicks outside the drop-down it will be closed
     */
    public onClickOutside(event){
        if(this.optionsContainerElement && !this.optionsContainerElement.nativeElement.contains(event.target)
            && !event.target.classList.contains('js-sdc-dropdown--toggle-hook')){
            this.show = false;
        }
    }

}
