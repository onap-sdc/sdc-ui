import {Component, OnInit, AfterViewInit, Input, Output, ViewChildren, QueryList, EventEmitter} from "@angular/core";
import {IComponentFilterGroup, IFilterGroup} from '../models/table.models';
import {TableSimpleFilterComponent} from './table-simple-filter.component';

@Component({
    selector: 'sdc-table-filter',
    templateUrl: './table-filter.component.html',
//    styleUrls: ['./table-filter.component.css']
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
    display: inline-block;
    width: 240px;
    padding-top: 20px;
}
.sdc-table-filter-button {
        padding: 5px 5px;
}
`]
})
export class TableFilterComponent implements OnInit, AfterViewInit {

    @Input() headerCols: any;
    @Output('changed') changed: EventEmitter<IFilterGroup[]> = new EventEmitter();

    @ViewChildren(TableSimpleFilterComponent) filterComponents: QueryList<Component>;

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    public runFilter() {
        let groups: IFilterGroup[] = [];

        this.filterComponents.forEach((child)=> {
            let group: IFilterGroup = (child as IComponentFilterGroup).FilterGroup;
            if (group.filters.length > 0) {
                groups.push(group);
            }
        })

        this.changed.next(groups);
    }
}
