import {Component, Input} from "@angular/core";

@Component({
    selector: "sdc-button",
    templateUrl: "./button.component.html"
})
export class ButtonComponent {
    @Input() public text: string;
    @Input() public disabled: boolean = false;
    @Input() public type: string = "primary";
    @Input() public size: string = "default";
    @Input() public preventDoubleClick: boolean;
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
