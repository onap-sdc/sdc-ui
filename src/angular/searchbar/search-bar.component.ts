/**
 * Created by rc2122 on 11/15/2017.
 */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'sdc-search-bar',
    templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public searchQuery: string;
    @Output() public searchQueryChange: EventEmitter<any> = new EventEmitter<any>();

    private inputText: string;
    public ngOnInit() {
        this.inputText = this.searchQuery;
    }

    private searchButtonClick = (): void => {
        this.searchQuery = this.inputText;
        this.searchQueryChange.emit(this.searchQuery);
    }
}

