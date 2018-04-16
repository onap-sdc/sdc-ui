import { Input, Component, ContentChildren, EventEmitter, Output, QueryList, SimpleChanges, HostBinding } from "@angular/core";
import { IValidator } from './validator.interface';
import template from "./base.validator.component.html";

@Component({
    selector: 'sdc-validator',
    template: template
})
export abstract class ValidatorComponent {

    @Input() public message: any;
    @Input() public disabled: boolean;
    @HostBinding('class') classes;

    protected isValid: boolean;

    constructor() {
        this.disabled = false;
        this.isValid = true;
        this.classes = 'sdc-validator sdc-label__error';
    }

    public abstract validate(value: any): boolean;

}
