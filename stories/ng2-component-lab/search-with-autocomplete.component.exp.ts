/**
 * Created by rc2122 on 11/16/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Search With Autocomplete').group('SearchWithAutocomlete',
[
    {
        id: 'autocomplete-search',
        title: 'Search With Autocomplete',
        description: `<pre>
            <h5>search with autocomplete - implementation example:</h5>
            <h4>Component code:</h4>
            @Component({
                selector: "search-with-autocomplete-example",
                template: '
                    &lt;search-with-autocomplete placeholder="search text"
                    label="search by color:"
                        [debounceTime]="1000"
                        [(searchQuery)]="searchText"
                        [autoCompleteValues]="autoCompleteValues"
                        (searchQueryChange)="onSearchTextChange($event)"
                        (executeSearch)="onSelectedValueToSearch($event)&gt
                        &lt;/search-with-autocomplete&gt
                &lt;table&gt
                    &lt;thead&gt
                        &lt;td&gt
                            name
                &lt;/td&gt
                &lt;td&gt
                    color
                &lt;/td&gt
                &lt;/thead&gt
                &lt;tbody&gt
                    &lt;tr *ngFor="let fruit of searchResults"&gt
                    &lt;td>{{fruit.name}}&lt;/td&gt
            &lt;td&gt{{fruit.color}}&lt;/td&gt
            &lt;/tr&gt
            &lt;/tbody&gt
            &lt;/table&gt
            ',
                styles: ['td{ padding: 5px; border: solid 1px black;} thead{background-color: green;}']
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
            <h4>Pipe code:</h4>
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
        <search-with-autocomplete-example></search-with-autocomplete-example>
    `
    }
]);
