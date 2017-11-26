import {Component, Input} from "@angular/core";

@Component({
    selector: "sdc-button",
    template: `
  <button class="sdc-button sdc-button__{{color}} sdc-button-{{sdcButtonStyle}}"
          (click)="onClick($event)"
          [disabled] = "disabled">
        <ng-content></ng-content>
  </button>`
})
export class ButtonComponent {

    @Input() public color: string;
    @Input() public sdcButtonStyle: string;
    @Input() public disabled: boolean;
    @Input() public preventDoubleClick: boolean;
    private lastClick: Date;
    constructor() {
        this.color = 'primary';
        this.sdcButtonStyle = 'default';
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
