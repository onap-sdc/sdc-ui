import {Component, EventEmitter, Input, Output} from '@angular/core'
import {FormControl} from "@angular/forms";

@Component({
    selector: 'sdc-input',
    templateUrl: './input.component.html',
})
export class InputComponent {

    protected control:FormControl;

    @Output('valueChange') baseEmitter:EventEmitter<any> = new EventEmitter<any>();
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

    onValueChange() {
        this.baseEmitter.emit(this.value);
    }
}
