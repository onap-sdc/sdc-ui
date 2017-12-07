/**
 * Created by rc2122 on 12/7/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: "sdc-tile-info-line",
    template: '<div class="sdc-tile-info-line" [ngClass]="type"><ng-content></ng-content></div>',
})

export class TileInfoLineComponent {
    @Input() public type: 'title'|'subtitle';
    constructor() {}
}
