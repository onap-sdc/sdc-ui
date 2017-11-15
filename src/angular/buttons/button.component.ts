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
    constructor() {
    }
}
