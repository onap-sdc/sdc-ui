import {TableComponent} from "./table.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableService} from "./services/table.service";
import {TableRowComponent} from "./view/table-row/table-row.component";
import {TableHeaderRow} from "./view/table-header-row/table-header-row.component";
@NgModule({
    declarations: [
        TableComponent,
        TableRowComponent,
        TableHeaderRow
    ],
    imports: [CommonModule],
    entryComponents: [],
    providers:[TableService],
    exports: [
        TableComponent
    ]
})

export class TableModule {

}

/**
 * test
 * Created by M.S.BIT on 21/11/2017.
 */
