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
    protected check: ICheck;
    @Output('valueChange') baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: any;
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

    onValueChange() {
        if (!this.patterns) return;
        this.check = (this.patterns).reduce((res, pattern) => {
            let regex = new RegExp(pattern.regex);
            let match = this.value.match(regex);
            if(match) {
                res.result = true;
            } else {
                res.error += ' ' + pattern.error_message;
            }
            return res;
        }, {
            result: false,
            error: ''
        });
        this.baseEmitter.emit(this.check);
    }
}

