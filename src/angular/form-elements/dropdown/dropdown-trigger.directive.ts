import { Directive, Input, HostBinding, HostListener } from "@angular/core";
import { DropDownComponent } from "./dropdown.component";

@Directive({
    selector: '[SdcDropdownTrigger]'
})

export class DropDownTriggerDirective {

    @HostBinding('class.js-sdc-dropdown--toggle-hook') true;
    @Input() dropDown: DropDownComponent;

    @HostListener('click', ['$event']) onClick = (event) => {
        this.dropDown.toggleDropdown(event);
    }

}
