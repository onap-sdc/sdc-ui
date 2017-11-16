import { Component, Input, Output, EventEmitter } from '@angular/core';
import {SearchBarComponent} from "../searchbox/search-bar.component";
import {trigger, transition, style, animate, state} from '@angular/animations';

@Component({
    selector: 'search-with-autocomplete',
    templateUrl: './search-with-autocomplete.component.html',
    animations: [
        trigger(
            'myAnimation',
            [
                transition(
                    ':enter', [
                        style({transform: 'translateX(100%)', opacity: 0}),
                        animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({transform: 'translateX(0)', 'opacity': 1}),
                        animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0}),

                    ]
                )]
        )
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

