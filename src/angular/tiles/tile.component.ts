import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: "sdc-tile",
    templateUrl: './tile.component.html'
})

export class TileComponent {
    @Input() public color: string;
    @Input() public header: string;
    @Input() public main_icon: string;
    @Input() public title: string;
    @Input() public pre_title: string;
    @Input() public footer: string;
    @Input() public footer_icon: string;
    @Output() tileClick: EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    onClick(ev) {
        this.tileClick.emit(true);
    }
}
