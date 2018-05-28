/**
 * Created by rc2122 on 5/24/2018.
 */
import {Component} from "@angular/core";
import template from './textarea.component.html';
import {BaseTextElementComponent} from "../base-text-element.component";
@Component({
    selector: 'sdc-textarea',
    template: template,
})

export class TextareaComponent extends BaseTextElementComponent {
    constructor() {
        super();
    }
}
