import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormControl} from "@angular/forms";
import {CheckModel, IOption, OptionTypes} from "./validation.model";

export interface ICheck {
    result: boolean;
    error: string;
}

export interface IPattern{
    regex: string;
    error_message: string;
}

@Component({
    selector: 'sdc-input',
    templateUrl: './input.component.html',
})

export class InputComponent implements OnInit{
    protected control: FormControl;
    //public check: ICheck;

    //@Output('valueChange') baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: string;
    @Input() public disabled: boolean;
    @Input() public placeHolder: string;
    @Input() public required: boolean;
    @Input() public minLength: number;
    @Input() public maxLength: number;
    @Input() public hint: boolean;
    @Input() public options: IOption[];

    @Output('onInputBlur') blurEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log(this.options)
        this.control = new FormControl('', []);
   }

    ngOnInit(){

    }

    onValueChange(value: string){
        console.log("value", value, this.value);
        this.value = value;
    }

    onBlurInput(){
        this.blurEmitter.next(this.value);
    }
}

