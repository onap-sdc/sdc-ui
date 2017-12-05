import {Component, Input} from "@angular/core";
import template from "./tile-info.component.html";


@Component({
    selector:'sdc-tile-info',
    template: template,
    host:{ class: 'sdc-tile-content'}
})

export class TileInfoComponent {
    @Input() public text: string;
    @Input() public color: string;
    @Input() public icon: string;
    @Input() public pre_title: string;

    constructor() {}
}

