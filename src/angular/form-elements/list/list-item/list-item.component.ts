import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by rc2122 on 11/21/2017.
 */
@Component({
    selector: 'sdc-list-item',
    templateUrl: './list-item.component.html',
})
export class ListItemComponent {
    @Input() public text: string;
    @Input() public isViewOnly: boolean;
    @Input() public index: number;
    @Output() public clickOnDelete: EventEmitter<number> = new EventEmitter<number>();
}
