/**
 * Created by rc2122 on 11/15/2017.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import template from "./search-bar.component.html";

@Component({
    selector: 'sdc-search-bar',
    template: template,
    host: {'class': 'sdc-search-bar'}
})
export class SearchBarComponent {

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public searchQuery: string;
    @Output() public searchQueryClick: EventEmitter<string> = new EventEmitter<string>();

    private searchButtonClick = (): void => {
      this.searchQueryClick.emit(this.searchQuery);
    }
}
