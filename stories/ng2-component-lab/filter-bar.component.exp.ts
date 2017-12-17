/**
 * Created by rc2122 on 11/15/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Filter Bar').group('FilterBar', [
    {
        id: 'filter-bar',
        title: 'Filter Bar',
        description: `<pre>
            The search text is updated on the field text change (after the debounce time).
            <h5>filter bar field - using example:</h5>
            <h4>Component Code:</h4>
            @Component({
                selector: "filter-bar-example",
                template: '
                    &lt;sdc-filter-bar placeholder="search text"
                    label="search box example:"
                        [debounceTime]="1000"
                        [searchQuery]="searchText"
                    (searchChanged)="onSearchTextChange($event)"&gt
                    &lt;/sdc-filter-bar&gt
                    &lt;ul&gt
                        &lt;li *ngFor="let item of list |searchFilter:searchText"&gt
                            {{item}}
                        &lt;/li&gt
                    &lt;/ul&gt
                    '
            })
            export class SearchBarExample {
                private list: string[] = ['apple', 'banana', 'orange', 'peach'];
                private searchText: string = '';
                private onSearchTextChange = (value: string): void => {
                    this.searchText = value;
                };
            }
            <h4>Pipe Code:</h4>
            @Pipe({
                name: 'searchFilter',
            })
            export class SearchFilterPipe implements PipeTransform {
                public transform(value, text: string) {
                    if (!text || !text.length) return value;
                    return value.filter((item) => {
                        return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
                    });
                }
            }
        </pre>`,
        showSource: true,
        template: `
        The text to search: {{searchText}}
        <sdc-filter-bar placeholder="filter text" 
                        label="filter example:" 
                        [debounceTime]="1000" 
                        [searchQuery]="searchText" 
                        (searchChanged)="searchText = $event">
        </sdc-filter-bar>
    `
    }
]);
