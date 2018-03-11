/**
 * Created by rc2122 on 11/15/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import template from "./filter-bar.component.html";
@Component({
    selector: 'sdc-filter-bar',
    template,
    host: {['class']: 'sdc-filter-bar'}
})
export class FilterBarComponent {

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public debounceTime: number = 200;

    @Input() public searchQuery: string;
    @Output() public searchQueryChange: EventEmitter<any> = new EventEmitter<any>();

    private searchTextChange = ($event): void => {
        this.searchQueryChange.emit($event);
    }

    private clearSearchQuery = (): void => {
        this.searchQuery = "";
    }
}
