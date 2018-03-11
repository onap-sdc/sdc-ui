import { Component, Input, Output, ViewEncapsulation, EventEmitter } from "@angular/core";
import { Direction, IOptionGroup, IRadioButtonModel } from "./radio-button.model";
import template from './radio-buttons-group.component.html';

@Component({
    selector: 'sdc-radio-group',
    template,
    host: {['class']: 'sdc-radio-group'},
    encapsulation: ViewEncapsulation.None
})
export class RadioGroupComponent {

    private direct: Direction = Direction.vertical;
    private selectedValue: string;

    @Input() public legend: string;
    @Input() public options: IOptionGroup;
    @Input() public disabled: boolean;

    @Input()
    get value(): string {
        return this.selectedValue;
    }
    set value(value: string) {
        if (this.isOptionExists(value) && this.disabled !== true) {
            this.selectedValue = value;
        }
    }

    @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    get direction(): string {
        return Direction[this.direct];
    }
    set direction(direction: string) {
        this.direct = (direction === 'horizontal' ? Direction.horizontal : Direction.vertical);
    }

    public onValueChanged(value): void {
        this.valueChange.emit(value);
    }

    private isOptionExists(value) {
        const exist = this.options.items.find((item: IRadioButtonModel) => {
            return item.value === value;
        });
        return exist !== undefined;
    }

}
