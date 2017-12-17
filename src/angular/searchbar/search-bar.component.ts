/**
 * Created by rc2122 on 11/15/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sdc-search-bar',
    templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public searchQuery: string;
    @Output() public searchButtonClicked: EventEmitter<string> = new EventEmitter<string>();

    private searchButtonClick = (): void => {
        if (this.searchQuery) { // do not allow empty search
            this.searchButtonClicked.emit(this.searchQuery);
        }
    }
}

