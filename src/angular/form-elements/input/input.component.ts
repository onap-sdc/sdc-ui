import {Component, EventEmitter, Input, Output} from '@angular/core'
import {FormControl} from "@angular/forms";

@Component({
    selector: 'sdc-input',
    templateUrl: './input.component.html',
})
export class InputComponent {

    protected control:FormControl;

    @Output('valueChange') baseEmitter:EventEmitter<any> = new EventEmitter<any>();

    @Input('value') set setValueValue(value:any) {
        this.value = value;
    }

    @Input() label:string;
    @Input() value:any;
    @Input() pattern:any;
    @Input() disabled:boolean;
    @Input() placeHolder:string;
    @Input() required:boolean;
    @Input() minLength:number;
    @Input() maxLength:number;

    constructor() {
        this.control = new FormControl('', []);
    }
}
