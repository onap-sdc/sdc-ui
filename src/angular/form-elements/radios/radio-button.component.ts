import {Component, Input, EventEmitter, Output} from '@angular/core';
import {IOptionItem} from "./radio-group-buttons.component";

@Component({
    selector: "sdc-radio",
    templateUrl: './radio-button.component.html'
})

export class RadioButtonComponent {
    @Input() option: IOptionItem;
    @Output() checkedChange:EventEmitter<any> = new EventEmitter<any>();
    toggleState(newValue:boolean) {
        this.checkedChange.emit(this.option.label);
    }
}
