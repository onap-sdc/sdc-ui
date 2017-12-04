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

    @Output('valueChange') baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: string;
    @Input() public disabled: boolean;
    @Input() public placeHolder: string;
    @Input() public required: boolean;
    @Input() public minLength: number;
    @Input() public maxLength: number;
    @Input() public hint: boolean;
    @Input() public options: IOption[];

    constructor() {
        console.log(this.options)
        this.control = new FormControl('', []);
   }

    ngOnInit(){
       // this.buildCheckObj();
    }

    onValueChange(value):void{
       this.validateValue();
    }



    public validateValue (){
      if(!this.options) return;
      this.check = new CheckModel(true, '');
      this.check = this.options.reduce((check, option)=> {
          switch(option.type){
              case (OptionTypes.REQUIRED):{
                  this.value ? check.result = true : check.result = false;
              } break;
              case (OptionTypes.PATTERN):{
                  check.result = this.comparePatterns(this.value, option.patterns);
              } break;
              case (OptionTypes.CUSTOM):{
                  // console.log('ererer')
                  // option.callback('test');
              } break;
          }
          if(!check.result) check.error = option.message;
          return check;
      }, { result: true, error:'' });
      console.log(this.check);
    }


    comparePatterns(value, patterns){
       if(!patterns || !value) return false;
       let check_regex = (patterns).reduce((res, pattern) => {
                        let regex = new RegExp(pattern);
                        let match = value.match(regex);
                        match ? res = true : res = false;
                        return res;
                    }, false );
       return check_regex;
    }

    // validateOptions(value){
    //     if(this.validateRequires(value)){
    //
    //     }
    //     if(this.validatePattern(value)){
    //
    //     }
    //     if(this.validateCustom(value)){
    //
    //     }
    //
    //     return  {result:'' , error:''};
    // }
    //
    // validateRequires(value):boolean{
    //     return true;
    // }
    //
    // validatePattern(value):boolean{
    //     return true;
    // }
    //
    // validateCustom(value):boolean{
    //     const customValidation = /* this.customCb(value) || */ true;
    //     if(!customValidation || typeof customValidation !== 'boolean'){
    //         / trow errro???
    //         console.error('Not supported custom validation result');
    //         return true;
    //     }
    //     return customValidation;
    // }
    //
    // buildCheckObj(options){
    //     return options.map(option => new CheckModel(option.type,option.error_message));
    // }
}

