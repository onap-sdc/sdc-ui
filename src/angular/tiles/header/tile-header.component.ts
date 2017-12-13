/**
 * Created by rc2122 on 12/10/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: "sdc-tile-header",
    template: '<div class=""><ng-content></ng-content></div>',
    host: {'class':'sdc-tile-header'}
})

export class TileHeaderComponent {
    constructor() {}
}
