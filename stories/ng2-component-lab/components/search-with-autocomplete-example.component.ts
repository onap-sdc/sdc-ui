/**
 * Created by rc2122 on 11/16/2017.
 */
import {Component} from "@angular/core";
import {SearchFilterPipe} from "../pipes/search-filter-pipe";

@Component({
    selector: "search-with-autocomplete-example",
    template: `
        <search-with-autocomplete placeholder="search text"
                                  label="search by color:"
                                  [debounceTime]="1000"
                                  [(searchQuery)]="searchText"
                                  [autoCompleteValues]="autoCompleteValues"
                                  (searchQueryChange)="onSearchTextChange($event)"
                                  (executeSearch)="onSelectedValueToSearch($event)">
        </search-with-autocomplete>
        <table>
            <thead>
                <td>
                    name
                </td>
                <td>
                    color
                </td>
            </thead>
            <tbody>
                <tr *ngFor="let fruit of searchResults">
                    <td>{{fruit.name}}</td>
                    <td>{{fruit.color}}</td>
                </tr>
            </tbody>
        </table>
    `,
    styles: ['td{ padding: 5px; border: solid 1px black;} thead{background-color: green;}'],
    providers: [SearchFilterPipe]
})
export class SearchWithAutocompleteExample {
    private list = [{name: 'apple', color: 'red' },
        {name: 'banana', color: 'yellow' },
        {name: 'orange', color: 'orange' },
        {name: 'pear', color: 'green' },
        {name: 'mango', color: 'orange'},
        {name: 'strawberry', color: 'red'}];
    private searchResults = [];
    private autoCompleteValues: string[] = [];
    private searchText: string = '';

    constructor(private searchFilterPipe: SearchFilterPipe) {
        this.searchResults = this.list;
    }
    private onSearchTextChange = (value: string): void => {
        this.autoCompleteValues = [];
        if (value) {
            // filter only relevant suggestions and unique them.
            this.list.forEach((fruit) => {
               if (fruit.color.indexOf(value) > -1) this.autoCompleteValues.push(fruit.color);
            });
            this.autoCompleteValues = this.autoCompleteValues.filter((elem, index, self) => {
                    return index === self.indexOf(elem);
            });
        }
    }

    private onSelectedValueToSearch = (value: string): void => {
        this.searchText = value;
        if (this.searchText) {
            // filter equals results
            this.searchResults = this.list.filter((fruit) => {
                return fruit.color === this.searchText;
            });
        } else {
            this.searchResults = this.list;
        }

    }
}
