import {Component, Input} from '@angular/core'


@Component({
    selector:'sdc-tile-footer',
    templateUrl:'./tile-footer.component.html'

})

export class TileFooterComponent {
    @Input() public text: string;
    @Input() public icon: string;

    constructor() {}
}
