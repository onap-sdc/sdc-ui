import { Component, Input, Output, ViewEncapsulation, EventEmitter, HostBinding } from "@angular/core";
import { Direction, IOptionGroup, IRadioButtonModel } from "./radio-button.model";
import template from './radio-buttons-group.component.html';

@Component({
    selector: 'sdc-radio-group',
    template: template,
    encapsulation: ViewEncapsulation.None
})
export class RadioGroupComponent {

    private _direction: Direction = Direction.vertical;
    private _selectedValue: string;

    @HostBinding('class') classes = 'sdc-radio-group';

    @Input() public legend: string;
    @Input() public options: IOptionGroup;
    @Input() public disabled: boolean;

    @Input()
    get value(): string {
        return this._selectedValue;
    }
    set value(value: string) {
        if (this.isOptionExists(value)) {
            this._selectedValue = value;
        }
    }

    @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    get direction(): string {
        return Direction[this._direction];
    }
    set direction(direction: string) {
        this._direction = (direction === 'horizontal' ? Direction.horizontal : Direction.vertical);
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
