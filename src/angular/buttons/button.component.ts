import {Component, Input} from "@angular/core";

@Component({
    selector: "sdc-button",
    template: `
  <button class="sdc-button sdc-button__{{color}} sdc-button-{{sdcButtonStyle}}"
       [disabled] = disabled>
        <ng-content></ng-content>
  </button>`
})
export class ButtonComponent {

    @Input() color:string;
    @Input() sdcButtonStyle:string;
    @Input() disabled:boolean;

    constructor() {
        this.color = 'primary';
        this.sdcButtonStyle = 'default';
    }
}
