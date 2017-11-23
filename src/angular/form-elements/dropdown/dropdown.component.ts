import {Component, EventEmitter, Input, Output, forwardRef, OnChanges, SimpleChanges} from '@angular/core'
//import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IDropDownGroup, IDropDownItem, IDropDownGroupResult} from "./dropdown-models";

@Component({
    selector: 'sdc-dropdown',
    templateUrl: './dropdown.component.html',
    host: {
        '(document:click)': 'onClickOutside($event)',
    }
})
export class DropDownComponent implements OnChanges {


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
    @Input() options: (IDropDownGroup|IDropDownItem|string)[];

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

    /**
     * Selected option index
     */
    public selectedIndex: number;

    /**
     * Selected option label
     */
    public selectedLabel:string;

    /**
     * The selected drop-down group
     */
    public selectedDropDownGroup: IDropDownGroup;

    /**
     * Drop-down show/hide flag. default is false (closed)
     * @type {boolean}
     */
    public show = false;

    /**
     * Error flag
     * @type {boolean}
     */
    public error = false;

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
        this.selectedIndex = index;
        this.updateSelected(option.label || option, option.value || option);
    }

    /**
     * Set drop-down group item as selected. Save the selected group as well as the value
     * @param event
     */
    public selectGroupOption(event: IDropDownGroupResult){
        const item = event.group.items.find((i) => event.value === i.value);
        this.selectedDropDownGroup = event.group;
        this.updateSelected(item.label, item.value);
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
     * Get the value of selected drop-down group item
     * @param dropdownGroup
     * @returns {string}
     */
    public getDropDownGroupSelectedValue(dropdownGroup: IDropDownGroup):string{
        if(this.selectedDropDownGroup && this.selectedDropDownGroup.title === dropdownGroup.title){
            return this.value;
        }
        return null;
    }

    /**
     * Check if our options are IDropDownGroup items
     */
    public isDropDownGroupList(): boolean{
        return this.options && this.options.length && this.options[0].hasOwnProperty('title') || false;
    }

    /**
     * Check if our options are IDropDownItem items
     */
    private isDropDownItemList(): boolean{
        return this.options && this.options.length && this.options[0].hasOwnProperty('label') || false
    }

    /**
     * Get the label of the selected option
     */
    public getSelectedLabel(): string{
       return this.selectedLabel || null;
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

    private setValueIfExistOnGroupList(value: string): void{
        const selectedDropDownGroup = this.options.find((dropDownGroup,index)=>{
            const checkDropDownGroup = <IDropDownGroup>dropDownGroup;
            const callback = this.setFoundValueCallback.bind(this, true, value);
            return !!checkDropDownGroup.items.find(callback);
        });
        if(selectedDropDownGroup){
            this.selectedDropDownGroup = <IDropDownGroup>selectedDropDownGroup;
        }
    }

   private setFoundValueCallback(isItem: boolean, value: string, option: any, index:number){
        const optionValue = isItem?(<IDropDownItem>option).value:option;
        if(optionValue === value){
            const optionLabel = isItem?(<IDropDownItem>option).label:option;
            this.updateSelected(optionLabel, optionValue, index);
            return true;
        }
        return false;
   }

    /**
     * Test if the specified value exist on the option list, if it is,
     * add it as the enw value
     * @param value
     */
    private setValueIfExist(value:string): void{
        if(this.isDropDownGroupList()){
            this.setValueIfExistOnGroupList(value);
        }else if(this.isDropDownItemList()){
            this.options.find(this.setFoundValueCallback.bind(this, true, value));
        }else{
            this.options.find(this.setFoundValueCallback.bind(this, false, value));
        }
    }


}
