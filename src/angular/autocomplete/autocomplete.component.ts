import { OnInit, animate, Component, EventEmitter, Input, Output, state, style, transition, trigger } from '@angular/core';
import { FilterBarComponent } from "../filterbar/filter-bar.component";
import { URLSearchParams, Http } from "@angular/http";
import { AutocompletePipe } from "./autocomplete.pipe";
import template from "./autocomplete.component.html";
import 'rxjs/add/operator/map';

export interface IDataSchema {
    key: string;
    value: string;
}

@Component({
    selector: 'sdc-autocomplete',
    template: template,
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
    ],
    providers: [AutocompletePipe]
})
export class SearchWithAutoCompleteComponent implements OnInit {
    @Input() public data: any[] = [];
    @Input() public dataSchema: IDataSchema;
    @Input() public dataUrl: string;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Output() public itemSelected: EventEmitter<any> = new EventEmitter<any>();

    private searchQuery: string;
    private complexData: any[] = [];
    private autoCompleteResults: any[] = [];
    private isItemSelected: boolean = false;

    public constructor(private http: Http, private autocompletePipe: AutocompletePipe) {
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

    private onItemSelected = (selectedItem: IDataSchema): void => {
        this.searchQuery = selectedItem.value;
        this.isItemSelected = true;
        this.autoCompleteResults = [];
        this.itemSelected.emit(selectedItem.key);
    }

    private onSearchQueryChanged = (searchText: string): void => {
        if (searchText !== this.searchQuery) {
            this.searchQuery = searchText;
            if (!this.searchQuery) {
                this.onClearSearch();
            } else {
                if (this.dataUrl) {
                    const params: URLSearchParams = new URLSearchParams();
                    params.set('searchQuery', this.searchQuery);
                    this.http.get(this.dataUrl, {search: params})
                        .map((response) => {
                            this.data = response.json();
                            this.handleLocalData();
                            this.autoCompleteResults = this.complexData;
                        }).subscribe();
                } else {
                    this.autoCompleteResults = this.autocompletePipe.transform(this.complexData, this.searchQuery);
                }
            }
            this.isItemSelected = false;
        }
    }

    private onClearSearch = (): void => {
        this.autoCompleteResults = [];
        if (this.isItemSelected) {
            this.itemSelected.emit();
        }
    }
}
