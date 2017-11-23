/**
 * Created by M.S.BIT on 16/11/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IDropDownGroupResult, IDropDownGroup, IDropDownItem} from "./dropdown-models";

@Component({
    selector: 'sdc-dropdown-group',
    template: `
        <li class="sdc-dropdown__option-group--header">{{optionGroup.title}}</li>
        <li *ngFor="let item of optionGroup.items; let i = index"
             class="sdc-dropdown__option sdc-dropdown__option-group"
             [ngClass]="{'selected': item.value === selectedValue}"
             (click)="selectOption(item)">
             {{item.label}}
        </li>
    `
})
export class DropDownGroupComponent {
    @Input('optionGroup') optionGroup: IDropDownGroup;

    /**
     * Drop-down value changed event emitter
     */
    @Output('valueChange') baseEmitter:EventEmitter<any> = new EventEmitter<any>();

    /**
     * Initial value the drop-down should have
     */
    @Input('value') selectedValue: any;

    selectOption(option: IDropDownItem):void{
        const result: IDropDownGroupResult = {
            group: this.optionGroup,
            value: option.value
        }
        this.baseEmitter.next(result);
    }
}
