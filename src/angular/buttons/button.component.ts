import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { Placement } from "../common/enums";
import template from "./button.component.html";

@Component({
    selector: "sdc-button",
    template: template
})

export class ButtonComponent implements OnInit {
    @Input() public text: string;
    @Input() public disabled: boolean;
    @Input() public type: string;
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
    private iconMode: string;

    @HostBinding('class.sdc-button__wrapper') true;

    constructor() {
        this.type = "primary";
        this.size = "default";
        this.disabled = false;
        this.iconMode = 'primary';
    }

    public ngOnInit(): void {
        this.iconPositionClass = this.icon_position ? 'sdc-icon-' + this.icon_position : '';
        this.iconMode = (this.type === "primary") ? 'info' : 'primary';
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
