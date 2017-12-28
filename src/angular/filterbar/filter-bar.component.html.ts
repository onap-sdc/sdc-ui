export default `
<div class="search-bar-container">
    <sdc-input class="search-bar-input"
               [label]="label"
               [placeHolder]="placeholder"
               [debounceTime]="debounceTime"
               [(value)]="searchQuery"
               (valueChange)="searchTextChange($event)"></sdc-input>
    <span class="clear-search-x filter-button" *ngIf="searchQuery" (click)="clearSearchQuery()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <path id="close-a" d="M13.5996,12 L19.6576,5.942 C20.1146,5.485 20.1146,4.8 19.6576,4.343 C19.2006,3.886 18.5146,3.886 18.0576,4.343 L11.9996,10.4 L5.9426,4.343 C5.4856,3.886 4.7996,3.886 4.3426,4.343 C3.8856,4.8 3.8856,5.485 4.3426,5.942 L10.4006,12 L4.3426,18.058 C3.8856,18.515 3.8856,19.2 4.3426,19.657 C4.5716,19.886 4.7996,20 5.1426,20 C5.4856,20 5.7136,19.886 5.9426,19.657 L11.9996,13.6 L18.0576,19.657 C18.2866,19.886 18.6286,20 18.8576,20 C19.0856,20 19.4286,19.886 19.6576,19.657 C20.1146,19.2 20.1146,18.515 19.6576,18.058 L13.5996,12 Z"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use fill="#000" xlink:href="#close-a"/>
          </g>
        </svg>
    </span>
    <span class="magnify-button filter-button" *ngIf="!searchQuery">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <path id="search-a" d="M2,8.5 C2,4.9 4.9,2 8.5,2 C12.1,2 15,4.9 15,8.5 C15,10.3 14.3,11.9 13.1,13.1 C11.9,14.3 10.3,15 8.5,15 C4.9,15 2,12.1 2,8.5 M19.7,18.3 L15.2,13.8 C16.3,12.4 17,10.5 17,8.5 C17,3.8 13.2,0 8.5,0 C3.8,0 0,3.8 0,8.5 C0,13.2 3.8,17 8.5,17 C10.5,17 12.3,16.3 13.8,15.2 L18.3,19.7 C18.5,19.9 18.8,20 19,20 C19.2,20 19.5,19.9 19.7,19.7 C20.1,19.3 20.1,18.7 19.7,18.3"/>
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
            <use fill="#000" xlink:href="#search-a"/>
          </g>
        </svg>
    </span>
</div>
`;
