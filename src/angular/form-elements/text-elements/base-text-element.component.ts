/**
 * Created by rc2122 on 5/27/2018.
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import {ValidatableComponent} from "../validation/validatable.component";

@Component({
})
export class BaseTextElementComponent extends ValidatableComponent implements OnInit {

    @Output('valueChange') public baseEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Input() public label: string;
    @Input() public value: any;
    @Input() public name: string;
    @Input() public classNames: string;
    @Input() public disabled: boolean;
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
