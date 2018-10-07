import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'sdc-tile-footer',
    template: '<ng-content></ng-content>'
})

export class TileFooterComponent {
    @HostBinding('class') classes = 'sdc-tile-footer';
}
