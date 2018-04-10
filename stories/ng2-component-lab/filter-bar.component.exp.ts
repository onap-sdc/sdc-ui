import { experimentOn } from '@islavi/ng2-component-lab';
import { SearchFilterPipe } from './pipes/search-filter-pipe';

const action = (e): void => {
    console.log("The search query was changed to: ", e);
};

export default experimentOn('Filter Bar').group('FilterBar', [
    {
        id: 'filterBar',
        title: 'Filter bar',
        description: `
            The filter bar component text is updated (after debounce time,
            default 200 miliseconds) while user write something.
            In this example the event on search query changed:
            const action = (e): void => {
                console.log("The search query was changed to: ", e);
            };
        `,
        context: {
            onChange: action
        },
        showSource: true,
        template: `
            <sdc-filter-bar placeholder="filter text"
                            label="filter example:"
                            [(searchQuery)]="searchText"
                            (searchQueryChange)="onChange($event)">
            </sdc-filter-bar>
            <br>
            Text to search: {{searchText}}
    `
    },
    {
        id: 'filterBarWithData',
        title: 'Filter bar with data',
        description: `
            Example of filter bar component with debounce 100 miliseconds,
            and with example pipe for filterring.
        `,
        context: {
            data: ['apple', 'banana', 'orange', 'peach']
        },
        showSource: true,
        template: `
            <sdc-filter-bar placeholder="filter text"
                            label="filter example:"
                            [debounceTime]="100"
                            [(searchQuery)]="searchText">
            </sdc-filter-bar>
            <ul style="height: 100px; background-color: #eeeeee;">
                <li *ngFor="let item of data | PipeSearchFilter:searchText">{{item}}</li>
            </ul>
    `
    }
]);
