import {Component, Input} from "@angular/core";

@Component({
    selector: "sdc-button",
    template: `
  <button class="sdc-button sdc-button__{{color}} sdc-button-{{type}}"
       [disabled] = disabled>
        <ng-content></ng-content>
  </button>`
})
export class ButtonComponent {

    @Input() color:string;
    @Input() type:string;
    @Input() disabled:boolean;

    constructor() {
        this.color = 'primary';
        this.type = 'default';
    }


}
