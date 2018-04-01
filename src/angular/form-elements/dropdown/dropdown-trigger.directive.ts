import { Directive, Input, OnInit, HostBinding, HostListener } from "@angular/core";
import { DropDownComponent } from "./dropdown.component";

@Directive({
    selector: '[dropdown-trigger]'
})

export class DropDownTriggerDirective implements OnInit{

    @HostBinding('class') classes = 'js-sdc-dropdown--toggle-hook';
    @Input() dropDown: DropDownComponent;

    @HostListener('click') onClick() {
        this.dropDown.toggleDropdown();
    }

    ngOnInit(): void {
        if (this.dropDown) {
            this.dropDown.headless = true;
        }
    }

}
