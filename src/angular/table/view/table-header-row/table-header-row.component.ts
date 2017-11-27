import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IColumnConfigModel} from "../../models/table.models";
/**
 * Created by M.S.BIT on 23/11/2017.
 */


@Component({
    selector: 'sdc-table-header-row',
    templateUrl: 'table-header-row.component.html',
    styles: []
})

export class TableHeaderRow {
    @Output('onColClick') colClickEventEmitter: EventEmitter<IColumnConfigModel> = new EventEmitter();
    @Input() headerCols: any;
    @Input() sortByField: string;
    @Input() sortDescending = true;
    @Input() textAlignment: string;
    onColumnHeaderClick(col: IColumnConfigModel){
        this.colClickEventEmitter.next(col);
    }
}
