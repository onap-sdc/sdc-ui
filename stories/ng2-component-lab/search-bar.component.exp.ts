/**
 * Created by rc2122 on 11/15/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Search Bar').group('SearchBar', [
    {
        id: 'search-bar',
        title: 'Search Bar',
        description: `<pre>
            <h5>search bar field - implementation example:</h5>
            @Component({
                selector: "search-bar-example",
                template: '
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
                    '
            })
            export class SearchBarExample {
                private list: string[] = ['apple', 'banana', 'orange', 'peach'];
                private searchText: string = '';
                private onSearchTextChange = (value: string): void => {
                    this.searchText = value;
                };
            }
        </pre>`,
        showSource: true,
        template: `
        <search-bar-example></search-bar-example>
    `
    }
]);
