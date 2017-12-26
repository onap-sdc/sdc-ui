import {OnInit, animate, Component, EventEmitter, Input, Output, state, style, transition, trigger} from '@angular/core';
import {FilterBarComponent} from "../filterbar/filter-bar.component";
import {URLSearchParams, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

export interface IDataSchema {
    key: string;
    value: string;
}

@Component({
    selector: 'sdc-autocomplete',
    templateUrl: './autocomplete.component.html',
    animations: [
        trigger('displayResultsAnimation', [
            state('true', style({
                height: '*',
                opacity: 1
            })),
            state('false', style({
                height: 0,
                opacity: 0
            })),
            transition('* => *', animate('200ms'))
        ]),
    ]
})
export class SearchWithAutoCompleteComponent implements OnInit {
    @Input() public data: any[] = [];
    @Input() public dataSchema: IDataSchema;
    @Input() public dataUrl: string;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Output() public itemSelected: EventEmitter<any> = new EventEmitter<any>();

    private searchQuery: string;
    private selectedItem: string;
    private complexData: any[] = [];

    public constructor(private http: Http){
    }

    public ngOnInit(): void {
        if (this.data) {
            this.handleLocalData();
        }
        this.searchQuery = "";
    }

    private handleLocalData = (): void => {
        // Convert the data (simple | complex) to unified complex data with key value.
        // In case user supplied dataSchema, this is complex data
        if (!this.dataSchema) {
            this.convertSimpleData();
        } else {
            this.convertComplexData();
        }
    }

    private convertSimpleData = (): void => {
        this.complexData = [];
        this.data.forEach((item: any) => {
            this.complexData.push({key: item, value: item});
        });
    }

    private convertComplexData = (): void => {
        this.complexData = [];
        this.data.forEach((item: any) => {
            this.complexData.push({key: item[this.dataSchema.key], value: item[this.dataSchema.value]});
        });
    }

    private onItemSelected = (searchTerm: string): void => {
        this.selectedItem =  searchTerm;
        this.searchQuery = searchTerm;
        this.itemSelected.emit(searchTerm);
    }

    private onSearchQueryChanged = (searchText: string): void => {
        if (this.dataUrl) {
            const params: URLSearchParams = new URLSearchParams();
            params.set('searchQuery', searchText);
            this.http.get(this.dataUrl, {search: params})
                .map((response) => {
                    this.data = response.json();
                    if (this.data) {
                        this.handleLocalData();
                    }
                }).subscribe();
        }

    }

}
