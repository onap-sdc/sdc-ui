import {Component, Input} from "@angular/core";
import template from "./button.component.html";

export enum IconPosition {
    right,
    left
}

@Component({
    selector: "sdc-button",
    template
})

export class ButtonComponent {
    @Input() public text: string;
    @Input() public disabled: boolean = false;
    @Input() public type: string = "primary";
    @Input() public size: string = "default";
    @Input() public preventDoubleClick: boolean;
    @Input() public icon_name: string;
    @Input() public icon_positon: IconPosition;
    private lastClick: Date;

    public onClick = (e): void => {
        const now: Date = new Date();
        if ( this.preventDoubleClick && this.lastClick && (now.getTime() - this.lastClick.getTime()) <= 500 ) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.lastClick = now;
    }
}
