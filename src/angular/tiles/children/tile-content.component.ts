import { Component, HostBinding } from "@angular/core";

@Component({
    selector: 'sdc-tile-content',
    template: '<ng-content></ng-content>'
})

export class TileContentComponent {
    @HostBinding('class') classes = 'sdc-tile-content';
}
