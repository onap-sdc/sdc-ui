import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Search Bar').group('SearchBar', [
    {
        id: 'search-bar',
        title: 'Search Bar',
        description: "The search text is updated on click on the magnify",
        showSource: true,
        template: `
        The text to search: {{searchText}}
        <sdc-search-bar placeholder="search text"
                        label="search example:"
                        [searchQuery]="searchText"
                        (searchQueryClick)="searchText = $event"
                        >
        </sdc-search-bar>
    `
    }
]);
