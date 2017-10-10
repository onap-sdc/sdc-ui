/**
 * Created by ob0695 on 6/27/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "colors-table",
    template: `
   
        <h1>{{tableTitle}}</h1>
        <div class="colors-table">
              <div class="color-section"  *ngFor="let color of tableMapColors | keys">
                <div class='sdc-bc-{{color}} color-circle'></div>
                <div>{{color}}</div>
                <div>{{tableMapColors[color]}}</div>
              </div>
        </div>
`
})
export class ColorsTable {

    @Input() tableTitle:string;
    @Input() tableMapColors: Object;

    constructor() {

    }

}
