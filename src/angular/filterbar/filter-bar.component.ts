/**
 * Created by rc2122 on 11/15/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sdc-filter-bar',
    templateUrl: './filter-bar.component.html'
})
export class FilterBarComponent {

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public searchQuery: string;
    @Input() public debounceTime: number = 200;
    @Output() public searchQueryChange: EventEmitter<any> = new EventEmitter<any>();

    private searchTextChange = ($event): void => {
        this.searchQueryChange.emit($event);
    }

    private clearSearchQuery = (): void => {
        this.searchQuery = "";
    }
}
