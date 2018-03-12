import {Component} from "@angular/core";

@Component({
    selector: 'sdc-tile-content',
    template: '<ng-content></ng-content>',
    host: {'class': 'sdc-tile-content'}
})

export class TileContentComponent {
}
