import {Component, OnInit, Input, Output} from "@angular/core";
import {IFilterGroup} from '../models/table.models';

@Component({
    selector: 'sdc-table-filter',
    templateUrl: './table-filter.component.html',
    /* styleUrls: ['./table-filter.component.css'] */
    styles: [`.sdc-table-filter {
    border: 1px solid #666;
    background-color: white;
    padding: 10px;
    margin-bottom: 5px;
}

.sdc-table-filter-group {
    border: 1px solid #666;
    padding: 10px;
    margin-bottom: 5px;
    background-color: white;
}

.sdc-table-filter-form {
    display: flex;
}

.sdc-table-filter-form-group {
    display: block;
    width: 240px;
    padding-top: 20px;
}

.sdc-table-filter-button {
    padding: 6px 20px;
}`]

})
export class TableFilterComponent implements OnInit {

    @Input() headerCols: any;

    private filterGroups: IFilterGroup[] = [];

    ngOnInit(): void {

    }
}
