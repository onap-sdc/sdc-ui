import { Component, HostBinding } from '@angular/core';
import template from "./tile.component.html";

@Component({
    selector: "sdc-tile",
    template: template
})

export class TileComponent {
    @HostBinding('class') classes = 'sdc-tile';
}
