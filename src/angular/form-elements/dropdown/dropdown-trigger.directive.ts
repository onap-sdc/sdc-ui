import {Directive, Input, OnInit} from "@angular/core";
import {DropDownComponent} from "./dropdown.component";

/**
 * Very simple directive that enables elements to toggle drop-down component
 */
@Directive({ 
    selector: '[dropdown-trigger]',
    host: {
        '(click)': 'onClickEvent()',
        '[class.js-sdc-dropdown--toggle-hook]' : 'true',
    }
})
// Directive class
export class DropDownTriggerDirective implements OnInit{

    /**
     * A reference to a drop-down component
     */
    @Input() dropDown: DropDownComponent;

    ngOnInit(): void {
        if(this.dropDown){
            this.dropDown.headless = true;
        }
    }

    private onClickEvent = ():void => {
        this.dropDown.toggleDropdown();
    }

}
