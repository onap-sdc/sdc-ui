import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {RadioButtonComponent} from "./radio-button.component";

export interface IOptionItem {
    checked: boolean;
    label: string;
    disabled: boolean;
    name: string;
    value: string;
};

export interface IOptionGroup {
    disabled: boolean;
    items: IOptionItem[];
};

@Component({
    selector: 'sdc-radio-group',
    templateUrl: './radio-group-buttons.component.html',
})

export class RadioGroupComponent implements OnInit{
    @Input() public options: IOptionGroup;
    @Input() public direction: string;
    @Input() public disabled: boolean;
    @Output() public selectedValue;

    onSelectionChange(value) {
        this.selectedValue = value;
    }

    ngOnInit(): void {
        this.options.items = this.options.items.map((item) => {
            item.disabled = this.disabled;
            return item;
        });
    }


}
