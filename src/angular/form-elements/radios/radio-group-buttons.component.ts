import {Component, Input, Output, OnChanges} from "@angular/core";
import {Directions, IOptionGroup} from "./radio-button.model"

@Component({
    selector: 'sdc-radio-group',
    templateUrl: './radio-group-buttons.component.html',
})
export class RadioGroupComponent implements OnChanges{
    @Input() public options: IOptionGroup;
    @Input() public direction: Directions;
    @Input() public disabled: boolean;
    @Output() public selectedValue;

    public onSelectionChange(value) {
        if(this.isOptionExists(value) && this.disabled !== true) {
            this.selectedValue = value;
        }
    }

    ngOnChanges(): void {
        this.options.items = this.options.items.map((item) => {
            item.disabled = this.disabled;
            return item;
        });
    }

    private isOptionExists(value){
        let check: boolean;
        let item_exist = this.options.items.filter((item) => {
            return  item.value == value;
        });
        item_exist.length > 0 ? check = true : check = false;
        return check;
    }

}
