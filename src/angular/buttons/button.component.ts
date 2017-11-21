import {Component, Input} from "@angular/core";

@Component({
    selector: "sdc-button",
    templateUrl: "./button.component.html"
})
export class ButtonComponent {
    @Input() public text: string;
    @Input() public disabled: boolean;
    @Input() public type: string;
    @Input() public size: string;
    @Input() public preventDoubleClick: boolean;
    private lastClick: Date;

    constructor() {
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
