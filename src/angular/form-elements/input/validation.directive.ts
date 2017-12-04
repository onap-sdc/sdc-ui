import { Directive, Input } from "@angular/core";

interface Ipattern{
    regex: string;
}

enum OptionTypes {
    CUSTOM,
    REQUIRED,
    PATTERN
}
interface IOption{
    type: OptionTypes;
    message: string;
}
interface IOptionCustom extends IOption{
    type: OptionTypes.CUSTOM;
    callback: (payload)=>{};
}
interface IOptionPattern extends IOption{
    type: OptionTypes.PATTERN;
    patterns?: Ipattern[];
}
interface IOptionRequired extends IOption{
    type: OptionTypes.REQUIRED;

}

interface ICheck{
    result:boolean;
    error:string;
}

@Directive({
    selector:'[sdc-validation]',
})

export class ValidationDirective {
    @Input() options :IOption[];
    @Input() inputValue: string;
    public check: ICheck;

    constructor(){
           if(this.options.length){
               this.check = {
                   result: false,
                   error:''
               };
           }
    }

    public validateInput(){
        this.options.forEach((option)=>{

        })
    }



}
