import {Component, Input} from "@angular/core";


@Component({
    selector:'sdc-tile-info',
    templateUrl:'./tile-info.component.html',
    host:{ class: 'sdc-tile-content'}
})

export class TileInfoComponent {
    @Input() public text: string;
    @Input() public color: string;
    @Input() public icon: string;
    @Input() public pre_title: string;

    constructor() {}
}

