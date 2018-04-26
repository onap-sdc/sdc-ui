/**
 * Created by M.S.BIT on 26/04/2018.
 */


import {Component, Input, Output, EventEmitter} from "@angular/core";
import {AccordionArrowDirection} from "./accordion.models";

@Component({
    selector:'sdc-accordion',
    templateUrl: 'accordion.component.html',
})
export class AccordionComponent {

    @Input('arrow-direction') arrowDirection: AccordionArrowDirection;
    @Input('css-class') customCSSClass: string;
    @Input('title') title: string;
    @Input('open') open: boolean = false;
    @Output('accordionChanged') changed = new EventEmitter<boolean>();

    public accordionArrowDirection = AccordionArrowDirection;

    public toggleAccordion(){
        this.open = !this.open;
        this.changed.emit(this.open);
    }
}
