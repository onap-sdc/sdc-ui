/**
 * Created by rc2122 on 12/10/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: "sdc-tile-header",
    template: '<ng-content></ng-content>',
    host: {'class':'sdc-tile-header'}
})

export class TileHeaderComponent {
}
