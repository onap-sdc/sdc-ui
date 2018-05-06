import { Component, Input, OnInit } from "@angular/core";
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
    @Input() public testsId: string;
    private lastClick: Date;
    private iconPositionClass: string;
    private iconMode: string;

    constructor() {
        this.type = "primary";
        this.size = "default";
        this.disabled = false;
        this.iconMode = 'primary';
    }

    public ngOnInit(): void {
        this.iconPositionClass = 'sdc-icon-' + this.icon_position;
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
}
