/**
 * Created by rc2122 on 11/15/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "search-bar-example",
    template: `
        <sdc-search-bar placeholder="search text" 
                        label="search box example:" 
                        [debounceTime]="1000" 
                        [searchQuery]="searchText" 
                        (searchChanged)="onSearchTextChange($event)">
        </sdc-search-bar>
        <ul>
            <li *ngFor="let item of list |searchFilter:searchText">
                {{item}}
            </li>
        </ul>
    `
})
export class SearchBarExample {
    private list: string[] = ['apple', 'banana', 'orange', 'peach'];
    private searchText: string = '';
    private onSearchTextChange = (value: string): void => {
        this.searchText = value;
    };
}
