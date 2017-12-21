/**
 * Created by rc2122 on 11/21/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
    selector: 'sdc-list',
    templateUrl: './list.component.html',
})
export class ListComponent {
    @Input() public list: string[];
    @Input() public isViewOnly: boolean|number[]; // get a boolean parameter or array of specific items indexes.
    @Input() public isUniqueList: boolean;
    @Input() public uniqueErrorMessage: string = "Unique error";
    @Input() public label: string;
    @Input() public placeholder: string;
    @Output() public listChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
    private newListItem: string;
    private uniqueError: boolean;
    private onKeyup = (e): void => {
        this.setUniqueError();
        if (e.keyCode === 13) {
            this.insertItemToList();
        }
    }
    private insertItemToList = (): void => {
        if (!this.uniqueError) {
            this.list.push(this.newListItem);
            this.newListItem = "";
            this.listChanged.emit(this.list);
        }
    }
    private deleteItemFromList = (index: number): void => {
        this.list.splice(index, 1);
        if (Array.isArray(this.isViewOnly)) {
            this.isViewOnly = this.isViewOnly.map((i: number) => {
                return i > index ? i - 1 : i;
            });
        }
        this.setUniqueError();
    }
    private setUniqueError = (): void => {
        this.uniqueError = this.isUniqueList && this.list.indexOf(this.newListItem) > -1;
    }
}
