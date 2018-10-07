import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ValidationComponent } from '../validation/validation.component';
import { ValidatableComponent } from './../validation/validatable.component';
import 'rxjs/add/operator/debounceTime';
import template from "./input.component.html";

@Component({
    selector: 'sdc-input',
    template: template,
})
export class InputComponent extends ValidatableComponent implements OnInit {

    @Output('valueChange') public baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: any;
    @Input() public name: string;
    @Input() public classNames: string;
    @Input() public disabled: boolean;
    @Input() public type: string;
    @Input() public placeHolder: string;
    @Input() public required: boolean;
    @Input() public minLength: number;
    @Input() public maxLength: number;
    @Input() public debounceTime: number;
    @Input() public testId: string;

    protected control: FormControl;

    constructor() {
        super();
        this.control = new FormControl('', []);
        this.debounceTime = 0;
        this.placeHolder = '';
        this.type = 'text';
    }

    ngOnInit() {
        this.control.valueChanges.
        debounceTime(this.debounceTime)
            .subscribe((newValue: any) => {
                this.baseEmitter.emit(this.value);
            });
    }

    public getValue(): any {
        return this.value;
    }

    onKeyPress(value: string) {
        this.valueChanged(this.value);
    }

}
