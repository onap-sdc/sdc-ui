import {Component, Input} from '@angular/core';

@Component({
    selector: "sdc-tile-header",
    template: '<div class="sdc-tile-header"  [ngClass] = "color" >{{ text }}</div>'
})

export class TileHeaderComponent {
    @Input() public color: string;
    @Input() public text: string;

    constructor() {}
}
