import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import template from "./checkbox.component.html";

@Component({
    selector: 'sdc-checkbox',
    template: template,
    encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
    @Input() label:string;
    @Input() checked:boolean;
    @Input() disabled:boolean;
    @Output() checkedChange:EventEmitter<any> = new EventEmitter<any>();

    public toggleState(newState:boolean) {
        if (!this.disabled) {
            this.checked = newState;
            this.checkedChange.emit(newState);
        }
    }
}
