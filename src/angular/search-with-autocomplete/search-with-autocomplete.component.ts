import {animate, Component, Input, state, style, transition, trigger} from '@angular/core';
import {SearchBarComponent} from "../searchbox/search-bar.component";

@Component({
    selector: 'search-with-autocomplete',
    templateUrl: './search-with-autocomplete.component.html',
    animations: [
        trigger('displayResultsAnimation', [
            state('true', style({
                height: '*'
            })),
            state('false', style({
                height: 0,
                opacity: 0
            })),
            transition('* => *', animate('500ms'))
        ]),
    ]
})
export class SearchWithAutoCompleteComponent  extends SearchBarComponent {
    @Input() public autoCompleteValues: string[];
    public searchChange = (searchTerm: string) => {
        if (this.searchQuery !== searchTerm) {
            this.searchQuery = searchTerm;
            this.searchChanged.emit(searchTerm);
        }
    }

    public updateSearch = (searchTerm: string) => {
        this.searchQuery = searchTerm;
        this.searchButtonClicked.emit(searchTerm);
        this.autoCompleteValues = [];
    }
}

