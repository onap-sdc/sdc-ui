import {Component, Input} from '@angular/core'
import {FormElementBase, FormElementBaseInterface} from '../form-base.component';

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
    templateUrl: './dropdown.component.html',
})
export class DropDownComponent extends FormElementBase implements FormElementBaseInterface {
    @Input()
    options: DropdownValue[] | string[];

    constructor() {
        super();

    }

    ngOnInit(){

    }

    onSave() {
        this.baseEmitter.emit(this.value);
    }

}
