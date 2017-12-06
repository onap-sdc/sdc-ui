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
    public check: ICheck;
    @Input() public label: string;
    @Input() public value: string;
    @Input() public disabled: boolean;
    @Input() public placeHolder: string;
    @Input() public required: boolean;
    @Input() public minLength: number;
    @Input() public maxLength: number;
    @Input() public hint: boolean;
    @Input() public options: IOption[];
    @Input() public checkValidation: boolean;

    @Output('onInputBlur') blurEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.control = new FormControl('', []);
   }

    ngOnInit(){
        this.checkRequired();
    }

    ngOnChanges(change){
        // watch for the FlagChange - if current checkValidation is TRUE - run the validation
        if(change.checkValidation && change.checkValidation.currentValue ){
            this.validateValue();
        }
    }
    public checkRequired():void{
        if(!this.options) return;
        this.required = this.options.reduce((required, option)=> {
            if(option.type == OptionTypes.REQUIRED){
                required = true;
            }
            return required;
        }, false);
    }

    public onBlur(){
        this.validateValue();
        this.blurEmitter.emit(this.check);
    }

    private validateValue():void{
        if(!this.options) return;
        this.check = new CheckModel(true, '');
        /*this.check =*/ this.options.reduce((check, option)=> {
            switch(option.type){
                case (OptionTypes.REQUIRED):{
                    this.value ? check.result = true : check.result = false;
                } break;
                case (OptionTypes.PATTERN):{
                    check.result = this.comparePatterns(this.value, option.patterns);
                } break;
                case (OptionTypes.CUSTOM):{
                    check.result = option.callback(this.value);
                } break;
            }
            if(!check.result) {
                check.error.length ? check.error += ', ' + option.message : check.error = option.message;
            }
            return check;
        }, this.check);
    }

    private comparePatterns(value, patterns){
        if(!patterns || !value) {return false;}

        return (patterns).reduce((res, pattern) => {
            let regex = new RegExp(pattern);
            let match = value.match(regex);
            match ? res = true : res = false;
            return res;
        }, false );
    }

}

