import { Component, Input } from "@angular/core";

@Component({
    selector: "colors-table",
    template: `

        <h1>{{tableTitle}}</h1>
        <div class="colors-table">
            <div class="color-group" *ngFor="let colorGroup of tableMapColors">
                <div class="color-section" *ngFor="let color of colorGroup | keys">
                    <div class='sdc-bc-{{color}} color-circle'></div>
                    <div>{{color}}</div>
                    <div>{{colorGroup[color]}}</div>
                </div>
            </div>
        </div>
`
})
export class ColorsTable {

    @Input() tableTitle: string;
    @Input() tableMapColors: Object;

    constructor() {

    }

}
