import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import template from "./filter-bar.component.html";

@Component({
    selector: 'sdc-filter-bar',
    template: template
})
export class FilterBarComponent {

    @HostBinding('class') classes = 'sdc-filter-bar';

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public debounceTime: number;

    @Input() public searchQuery: string;
    @Output() public searchQueryChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.debounceTime = 200;
    }

    private searchTextChange = ($event): void => {
        this.searchQueryChange.emit($event);
    }

    private clearSearchQuery = (): void => {
        this.searchQuery = "";
    }
}
