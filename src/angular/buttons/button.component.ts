import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { Placement, ButtonType } from "../common/enums";
import { IButtonComponent } from './ibutton.interface';
import template from "./button.component.html";

@Component({
    selector: "sdc-button",
    template: template
})

export class ButtonComponent implements OnInit, IButtonComponent {
    @Input() public text: string;
    @Input() public disabled: boolean;
    @Input() public type: ButtonType;
    @Input() public size: string;
    @Input() public preventDoubleClick: boolean;
    @Input() public icon_name: string;
    @Input() public icon_position: string;
    @Input() public show_spinner: boolean;
    @Input() public spinner_position: Placement;
    @Input() public testId: string;

    public placement = Placement;
    private lastClick: Date;
    private iconPositionClass: string;

    @HostBinding('class.sdc-button__wrapper') true;

    constructor() {
        this.type = ButtonType.primary;
        this.size = "default";
        this.disabled = false;
    }

    public ngOnInit(): void {
        this.iconPositionClass = this.icon_position ? 'sdc-icon-' + this.icon_position : '';
    }

    public onClick = (e): void => {
        const now: Date = new Date();
        if ( this.preventDoubleClick && this.lastClick && (now.getTime() - this.lastClick.getTime()) <= 500 ) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.lastClick = now;
    }

    public disableButton = () => {
        if (!this.disabled) {
            this.disabled = true;
        }
    }

    public enableButton = () => {
        if (this.disabled) {
            this.disabled = false;
        }
    }

}
