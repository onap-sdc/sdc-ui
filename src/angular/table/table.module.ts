import {TableComponent} from "./table.component";
import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {TableService} from "./services/table.service";
import {TableRowComponent} from "./view/table-row/table-row.component";
import {TableHeaderRow} from "./view/table-header-row/table-header-row.component";
import {TableBody} from "./view/table-body/table-body.component";
import {InfiniteScrollModule} from "../infinite-scroll/infinite-scroll.module";
import {TablePaginationBarComponent} from "./table-pagination-bar/table-pagination-bar.component";
import {TableFilterComponent} from './table-filter/table-filter.component';
import {TableSimpleFilterComponent} from './table-filter/table-simple-filter.component';
import {TableRangeFilterComponent} from './table-filter/table-range-filter.component';
import {TableSearchFilterComponent} from './table-filter/table-search-filter.component';

@NgModule({
    declarations: [
        TableComponent,
        TableRowComponent,
        TableHeaderRow,
        TableBody,
        TableFilterComponent,
        TableSimpleFilterComponent,
        TableRangeFilterComponent,
        TableSearchFilterComponent,
        TablePaginationBarComponent
    ],
    imports: [CommonModule, InfiniteScrollModule, FormsModule],
    entryComponents: [],
    providers:[TableService],
    exports: [
        TableComponent,
        TableRowComponent,
        TableHeaderRow,
        TableBody,
        TableFilterComponent,
        TableSimpleFilterComponent,
        TableRangeFilterComponent,
        TableSearchFilterComponent,
        TablePaginationBarComponent
    ]
})

export class TableModule {

}

/**
 * test
 * Created by M.S.BIT on 21/11/2017.
 */
