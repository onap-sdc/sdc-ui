/**
 * Created by rc2122 on 11/15/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
const onSearchChanged = () => {alert('The search text was changed'); };
export default experimentOn('Search Bar').group('SearchBar', [
    {
        id: 'search-bar',
        title: 'Search Bar',
        description: "The search text is updated on click on the magnify",
        showSource: true,
        context: {
            onSearchChanged: onSearchChanged
        },
        template: `
        The text to search: {{searchText}}
        <sdc-search-bar placeholder="search text" 
                        label="search example:" 
                        [(searchQuery)]="searchText" 
                        (searchQueryChange)="onSearchChanged()">
        </sdc-search-bar>
    `
    }
]);
