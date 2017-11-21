import {Directive, ElementRef, Renderer, Input, OnInit} from "@angular/core";
import {DropDownComponent} from "./dropdown.component";

/**
 * Very simple directive that enables elements to toggle drop-down component
 */
@Directive({ selector: '[dropdown-trigger]' })
// Directive class
export class DropDownTriggerDirective implements OnInit{

    /**
     * A refereec to a drop-down component
     */
    @Input() dropDown: DropDownComponent;

    constructor(private el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, 'js-sdc-dropdown--toggle-hook', true);
    }

    ngOnInit(): void {
        if(this.dropDown){
            this.el.nativeElement.addEventListener('click', ()=>{
                this.dropDown.toggleDropdown();
            })
        }
    }

}
