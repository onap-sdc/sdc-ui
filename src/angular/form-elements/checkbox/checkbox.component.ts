import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import template from "./checkbox.component.html";

@Component({
    selector: 'sdc-checkbox',
    template,
    encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
    @Input() public label: string;
    @Input() public checked: boolean;
    @Input() public disabled: boolean;
    @Output() public checkedChange: EventEmitter<any> = new EventEmitter<any>();

    public toggleState(newState: boolean) {
        if (!this.disabled) {
            this.checked = newState;
            this.checkedChange.emit(newState);
        }
    }
}
