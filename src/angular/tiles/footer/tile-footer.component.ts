import {Component, Input} from '@angular/core'


@Component({
    selector:'sdc-tile-footer',
    templateUrl:'./tile-footer.component.html',
    host: {'class':'sdc-tile-footer'}
})

export class TileFooterComponent {
    @Input() public text: string;
    @Input() public icon: string;

    constructor() {}
}
