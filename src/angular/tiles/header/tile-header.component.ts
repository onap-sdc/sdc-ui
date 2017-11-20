import {Component, Input} from '@angular/core';

@Component({
    selector: "sdc-tile-header",
    template: '<div class=""  [ngClass] = "color" >{{ text }}</div>',
    host: {'class':'sdc-tile-header'}
})

export class TileHeaderComponent {
    @Input() public color: string;
    @Input() public text: string;

    constructor() {}
}
