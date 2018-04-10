export default `
<div class="sdc-autocomplete-container" [ngClass]="{'results-shown': autoCompleteResults.length}">
    <sdc-filter-bar
        [placeholder]="placeholder"
        [label]="label"
        [searchQuery]="searchQuery"
        (searchQueryChange)="onSearchQueryChanged($event)">
    </sdc-filter-bar>
    <ul class="autocomplete-results" [@displayResultsAnimation]="autoCompleteResults.length ?'true':'false'">
        <li *ngFor="let item of autoCompleteResults"
        (click)="onItemSelected(item)">{{item.value}}</li>
    </ul>
</div>
`;
