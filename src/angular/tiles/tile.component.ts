import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: "sdc-tile",
    templateUrl: './tile.component.html',
})

export class TileComponent {
    @Input() public color: string;
    @Input() public header: string;
    @Input() public info_icon: string;
    @Input() public info_text: string;
    @Input() public info_pre_title: string;
    @Input() public footer: string;
    @Input() public footer_icon: string;
}
