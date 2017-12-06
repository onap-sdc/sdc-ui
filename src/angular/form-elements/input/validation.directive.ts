import {Directive, Input, OnChanges, SimpleChanges, Renderer, ElementRef, OnInit, AfterViewInit} from "@angular/core";
import {CheckModel, IOption, OptionTypes, ICheck} from "./validation.model";



@Directive({
    selector:'[sdc-validation]',
    exportAs:'sdc-validation',
})

export class ValidationDirective implements OnChanges, OnInit, AfterViewInit {

    ngAfterViewInit(): void {
        this.checkRequired();
    }
    public label:any;
    public input:any;
    public error_label: any = null;
    public required :boolean = false;
    @Input('valueToCheck') value: any;
    @Input('options') options: IOption[];
    @Input('check') check:ICheck;
    private nativeElement : Node;

    constructor(public element: ElementRef, public renderer: Renderer){
        this.nativeElement = element.nativeElement;
    }

    ngOnChanges(changes: SimpleChanges): void {}

    ngOnInit(){}

    public checkRequired():void{
        if(!this.options) return;
        this.required = this.options.reduce((required, option)=> {
            if(option.type == OptionTypes.REQUIRED){
                required = true;
            }
            return required;
        }, false);
        if(this.required) this.addRequiredSymbol()
    }


    public validateValue():void{
        if(!this.options) return;
        this.check = new CheckModel(true, '');
        this.options.reduce((check, option)=> {
            switch(option.type){
                case (OptionTypes.REQUIRED):{
                    this.value ? check.result = true : check.result = false;
                } break;
                case (OptionTypes.PATTERN):{
                    check.result = this.comparePatterns(this.value, option.patterns);
                } break;
                case (OptionTypes.CUSTOM):{
                   check.result = <boolean>option.callback(this.value);
                } break;
            }
            if(!check.result) {
                check.error.length ? check.error += ', ' + option.message : check.error = option.message;
            }
            return check;
        }, this.check);
        this.addLabel(this.check);
    }


    private comparePatterns(value, patterns){
        if(!patterns || !value) return false;
        let check_regex = (patterns).reduce((res, pattern) => {
            let regex = new RegExp(pattern);
            let match = value.match(regex);
            match ? res = true : res = false;
            return res;
        }, false );
        return check_regex;
    }

    private addLabel(check:ICheck){
        if(this.error_label) this.removeError();
        if(check.result) return;
        this.error_label = this.renderer.createElement(this.nativeElement, 'label');
        this.input = this.nativeElement['querySelector']('input');
        let text_error = '&#9888; ' + this.check.error;
        this.renderer.setElementProperty(this.error_label, 'innerHTML', text_error);
        this.renderer.setElementAttribute(this.error_label, 'class', 'sdc-label__error');
        this.renderer.setElementAttribute(this.input, 'class', 'sdc-input__input error');
    }

    private addRequiredSymbol(){
        let label = this.nativeElement['querySelector']('label');
        this.renderer.setElementAttribute(label, 'class', 'sdc-input__label required');
    }

    private removeError(){
        this.nativeElement.removeChild(this.error_label);
        this.error_label = null;
        this.input = this.nativeElement['querySelector']('input');
        this.renderer.setElementAttribute(this.input, 'class', 'sdc-input__input');
    }

}
