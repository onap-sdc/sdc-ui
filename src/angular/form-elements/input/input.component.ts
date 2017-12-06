import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core'
import {FormControl} from "@angular/forms";
import {CheckModel, IOption, OptionTypes} from "./validation.model";

export interface ICheck {
    result: boolean;
    error: string;
}

@Component({
    selector: 'sdc-input',
    templateUrl: './input.component.html',
})

export class InputComponent implements OnInit, OnChanges{

    private validationActions = {
        [OptionTypes.REQUIRED]: this.requiredValidation,
        [OptionTypes.CUSTOM]:this.customValidation,
        [OptionTypes.PATTERN]:this.patternValidation
    };

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

    @Output('blur') blurEmitter: EventEmitter<any> = new EventEmitter();

    @Output('change') changeEmitter: EventEmitter<any> = new EventEmitter();

    @Output('focus') focusEmitter: EventEmitter<any> = new EventEmitter();

    @Output('keyup') keyupEmitter: EventEmitter<any> = new EventEmitter();


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

    /**
     * Check func that input required
     */
    public checkRequired():void{
        if(!this.options) return;
        this.required = this.options.reduce((required, option)=> {
            if(option.type == OptionTypes.REQUIRED){
                required = true;
            }
            return required;
        }, false);
    }

    /**
     *  Input Events handlers
     */

    public onBlur(){
        this.validateValue();
        this.blurEmitter.emit(this.check);
    }

    public onChange(){
        this.validateValue();
        this.changeEmitter.emit(this.check);
    }

    public onFocus(){
        this.focusEmitter.emit(this.check);
    }

    public onKeyup(){
        this.keyupEmitter.emit(this.check);
    }


    /**
     * Input Validation Handlers
     */

    private requiredValidation(value, option){
        let result;
        value ? result = true : result = false;
        return result;
    }

    private customValidation(value, option){
        return option.callback(value);
    }

    private patternValidation(value, option){
        if(!option.patterns || !value) {return false;}
        return (option.patterns).reduce((res, pattern) => {
            let regex = new RegExp(pattern);
            let match = value.match(regex);
            match ? res = true : res = false;
            return res;
        }, false );
    }

    /**
     * Validation mechanism
     */

    private validateValue():void{
        if(!this.options) return;
        this.check = new CheckModel(true, '');
        this.options.forEach((option)=> {
            let result = this.validationActions[option.type](this.value, option);
            if(!result) {
                this.check.result = result;
                this.check.error.length ? this.check.error += ', ' + option.message : this.check.error = option.message;
            }
        });
    }


}

