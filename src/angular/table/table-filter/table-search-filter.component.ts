import {Component, Input, Output, EventEmitter} from "@angular/core";
import {FilterOperator, IColumnConfigModel, IFilterGroup
} from '../models/table.models';

@Component({
    selector: 'sdc-table-search-filter',
    templateUrl: './table-search-filter.component.html',
//    styleUrls: ['./table-filter.component.css']
    styles: [`.sdc-table-filter {
    border: 1px solid #666;
    background-color: white;
    padding: 10px;
    margin-bottom: 5px;
    width: 60%;        
}

.sdc-table-filter-group {
    border: 1px solid #666;
    padding: 10px;
    margin-bottom: 5px;
    background-color: white;
}

.sdc-table-filter-form {
    display: block;
}

.sdc-table-filter-form-group {
    display: flex;
    width: 240px;
    margin: 10px;
    /*padding-top: 20px;*/
}
.sdc-table-filter-label, .sdc-table-filter-input  {
    width: 150px;
    flex-grow: 0;
    flex-shrink: 0;
}
.sdc-table-filter-span {
    padding-right: 5px;
}
.sdc-table-filter-separator {
    padding-left: 15px;
}
.sdc-table-filter-button {
        padding: 5px 5px;
}
`]
})
export class TableSearchFilterComponent {

    @Input() headerCols: any;
    @Output('changed') changed: EventEmitter<IFilterGroup[]> = new EventEmitter();

    public searchText: string = '';

    public search() {
        const searchText = this.searchText;

        const cols: IColumnConfigModel[] = this.headerCols.filter((item) => {
            return item.searchable;
        });

        if(cols && cols.length > 0) {
            let groups: IFilterGroup[] = [{ filters: [] }];

            cols.forEach((item) => {
                groups[0].filters.push ({
                    field: item.key,
                    operator: FilterOperator.Equal,
                    value: searchText
                });
            });

            this.changed.next(groups);
        }
    }

    public clear() {
        this.searchText = '';

        let groups: IFilterGroup[] = [];

        this.changed.next(groups);
    }
}
