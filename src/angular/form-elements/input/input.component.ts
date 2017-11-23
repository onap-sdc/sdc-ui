import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormControl} from "@angular/forms";

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
    public check: ICheck;
    @Output('valueChange') baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: string;
    @Input() public disabled: boolean;
    @Input() public placeHolder: string;
    @Input() public required: boolean;
    @Input() public minLength: number;
    @Input() public maxLength: number;
    @Input() public hint: boolean;
    @Input() public patterns: IPattern[];

    constructor() {
        this.control = new FormControl('', []);
    }

    ngOnInit(){
        if (this.patterns) {
            this.check = {
                result: false,
                error: ''
            };
        }
    }

    public onValueChange() {
        if (!this.patterns) return;
        this.check = (this.patterns).reduce((res, pattern) => {
            let regex = new RegExp(pattern.regex);
            let match = this.value.match(regex);
            if(match) {
                res.result = true;
            } else {
                res.error.length == 0 ? res.error = pattern.error_message : res.error += ', ' + pattern.error_message;
            }
            return res;
        }, {
            result: false,
            error: ''
        });
        this.baseEmitter.emit(this.check);
    }

    public validateInput(error_message): void{
        console.log('here')
        this.check = {
            result: false,
            error: ''
        };
        if(!this.disabled && this.required && (!this.value || this.value === '')){
            this.check.result = false;
            if(error_message) this.check.error = error_message;
            return;
        }
        this.check.result = true;
        this.baseEmitter.emit(this.check);
    }
}

