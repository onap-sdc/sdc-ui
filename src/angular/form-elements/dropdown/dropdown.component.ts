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
    @Output('valueChange') baseEmitter:EventEmitter<any> = new EventEmitter<any>();

    /**
     * The label that will show up above the drop-down
     */
    @Input() label: string;

    /**
     * Option can be add by a list of IDropDownGroup, IDropDownItem objects, or a list of strings
     */
    //@Input() options: (IDropDownGroup|IDropDownItem|string)[];

    @Input() options: IDropDownOption[];

    /**
     * Initial value the drop-down should have
     */
    @Input() value: any;

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

    @Input() headless = false;

    @ViewChild('dropDownWrapper') dropDownWrapper: ElementRef;

    /**
     * Selected option index
     */
    public selectedIndex: number;

    /**
     * Selected option label
     */
    public selectedLabel:string;

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
    private unselectableOptions = [DropDownOptionType.Disable, DropDownOptionType.Header, DropDownOptionType.HorizontalLine];

    public isGroupDesign = false;

    constructor(private view:ElementRef){}

    ngOnInit(): void {
        if(this.options){
            if(this.options.find(option => option.type === DropDownOptionType.Header)){
                this.isGroupDesign = true;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.value){
            this.setValueIfExist(this.value);
        }
    }

    public isValid(){
        return !this.error;
    }

    /**
     * Validate when required is enabled
     */
    public validateDropDown(): void{
        if(!this.disabled && this.required && (!this.value || this.value === '')){
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
        const unselectable = this.unselectableOptions.find(optionType => option.type === optionType);
        if(unselectable){
            return;
        }
        this.selectedIndex = index;
        this.updateSelected(option.label || option, option.value || option);
    }

    /**
     * Update the value and label of the drop down with new ones
     * @param label
     * @param value
     */
    private updateSelected(label: string, value: string, index?: number){
        this.selectedLabel = label;
        this.value = value;
        this.baseEmitter.next(this.value);
        this.selectedIndex = index || this.selectedIndex;
        this.validateDropDown();
    }

    /**
     * Get the label of the selected option
     */
    public getSelectedLabel(): string{
       return this.selectedLabel || null;
    }

    public isBottomVisible(){
        const windowPos = window.innerHeight + window.pageYOffset;
        const dropDownPos = this.dropDownWrapper.nativeElement.offsetTop + this.dropDownWrapper.nativeElement.offsetHeight + 244;
        console.log("dropDownWrapper", this.dropDownWrapper.nativeElement.offsetHeight);
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
        if(!event.target.classList.contains('js-sdc-dropdown--toggle-hook')){
            this.show = false;
        }
    }

    /**
     * Test if the specified value exist on the option list, if it is,
     * add it as the enw value
     * @param value
     */
    private setValueIfExist(value:string): void{
        const index = this.options.findIndex(option => option.value === value || option.label === value);
        const unselectableOption = index && !!this.unselectableOptions.find(optionType => optionType === this.options[index].type);
        if(!unselectableOption){
            this.updateSelected(this.options[index].label, value, index);
        }
    }
}
