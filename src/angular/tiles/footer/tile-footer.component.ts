import {Component, Input} from '@angular/core'
import template from "./tile-footer.component.html";


@Component({
    selector:'sdc-tile-footer',
    template: template,
    host: {'class':'sdc-tile-footer'}
})

export class TileFooterComponent {
    @Input() public text: string;
    @Input() public icon: string;

    constructor() {}
}
