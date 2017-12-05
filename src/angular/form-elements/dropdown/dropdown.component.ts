import {Component, EventEmitter, Input, Output} from '@angular/core'
import template from "./dropdown.component.html";

export class DropdownValue {
    value:any;
    label:string;

    constructor(value:any, label:string) {
        this.value = value;
        this.label = label;
    }
}

@Component({
    selector: 'sdc-dropdown',
    template: template,
})
export class DropDownComponent {

    @Output('valueChange') baseEmitter:EventEmitter<any> = new EventEmitter<any>();

    @Input() label:string;
    @Input() options:DropdownValue[] | string[];
    @Input() value:any;
    @Input() disabled:boolean;
    @Input() placeHolder:string;
    @Input() required:boolean;

}
