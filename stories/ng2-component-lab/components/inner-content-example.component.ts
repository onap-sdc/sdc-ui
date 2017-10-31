/**
 * Created by ob0695 on 10/23/2017.
 */
/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "inner-content",
    template: `
        <div>
            <sdc-input [label]="'Enter value'" [(value)]="name"> </sdc-input>
        </div>
`
})
export class InnerContent {

    @Input() name:string;
}
