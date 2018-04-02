import { Component, HostBinding } from '@angular/core';

@Component({
    selector: "sdc-tile-header",
    template: '<ng-content></ng-content>'
})

export class TileHeaderComponent {
    @HostBinding('class') classes = 'sdc-tile-header';
}
