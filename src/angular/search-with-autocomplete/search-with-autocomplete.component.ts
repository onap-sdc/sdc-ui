import {animate, Component, EventEmitter, Input, Output, state, style, transition, trigger} from '@angular/core';
import {FilterBarComponent} from "../filterbar/filter-bar.component";

@Component({
    selector: 'search-with-autocomplete',
    templateUrl: './search-with-autocomplete.component.html',
    animations: [
        trigger('displayResultsAnimation', [
            state('true', style({
                height: '*',
                opacity: 1
            })),
            state('false', style({
                height: 0,
                opacity: 0
            })),
            transition('* => *', animate('500ms'))
        ]),
    ]
})
export class SearchWithAutoCompleteComponent  extends FilterBarComponent {
    @Input() public autoCompleteValues: string[];
    @Output() public executeSearch: EventEmitter<any> = new EventEmitter<any>();

    public onSearchTextChange = (searchTerm: string) => {
        if (this.searchQuery !== searchTerm) {
            if (!searchTerm) {
                this.onSelectTextToSearch(searchTerm);
            }else {
                this.searchQuery = searchTerm;
                this.searchQueryChange.emit(searchTerm);
            }
        }
    }

    public onSelectTextToSearch = (searchTerm: string) => {
        this.searchQuery = searchTerm;
        this.executeSearch.emit(searchTerm);
        this.autoCompleteValues = [];
    }
}

