import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import template from "./input.component.html";
import {BaseTextElementComponent} from "../base-text-element.component";

@Component({
    selector: 'sdc-input',
    template: template,
})
export class InputComponent extends BaseTextElementComponent {
    @Input() public type: string;

    constructor() {
        super();
        this.type = 'text';
    }

}
