import {Component, Input} from '@angular/core';

@Component({
    selector: "sdc-tile",
    templateUrl: './tile.component.html',
})

export class TileComponent {
    @Input() public headerText: string;
    @Input() public headerColor: 'blue' | 'purple';
    @Input() public iconName: string;
    @Input() public iconColor: 'blue' | 'purple';
}
