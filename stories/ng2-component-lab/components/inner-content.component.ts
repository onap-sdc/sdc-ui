/**
 * Created by ob0695 on 10/23/2017.
 */
/**
 * Created by ob0695 on 10/16/2017.
 */
import {Component} from "@angular/core";

@Component({
    selector: "inner-content",
    template: `
        <div>
            <sdc-input [label]="'Enter value'"> </sdc-input>
        </div>
        <div>
            <sdc-input [label]="'Enter value'"> </sdc-input>
        </div>
        <div>
            <sdc-input [label]="'Enter value'"> </sdc-input>
        </div>
       
`
})
export class InnerContent {

    constructor() {

    }
}
