import { Component, Input } from "@angular/core";

@Component({
    selector: "inner-content",
    template: `
        <div>
            <sdc-input [label]="'Enter value'" [(value)]="name"> </sdc-input>
            <sdc-input [label]="'Enter value'" [(value)]="name"> </sdc-input>
            <sdc-input [label]="'Enter value'" [(value)]="name"> </sdc-input>
        </div>
`
})
export class ModalInnerContent {

    @Input() name:string;
}
