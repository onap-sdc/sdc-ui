/**
 * Created by M.S.BIT on 26/04/2018.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Placement} from "../common/enums";
import template from './accordion.component.html';

@Component({
    selector: 'sdc-accordion',
    template: template,
})
export class AccordionComponent {

    @Input('arrow-direction') arrowDirection: Placement;
    @Input('css-class') customCSSClass: string;
    @Input('title') title: string;
    @Input('open') open: boolean;
    @Output('accordionChanged') changed = new EventEmitter<boolean>();

    public accordionArrowDirection = Placement;

    public toggleAccordion(){
        this.open = !this.open;
        this.changed.emit(this.open);
    }
}
