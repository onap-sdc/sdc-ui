import {experimentOn} from "@islavi/ng2-component-lab";
import {tableData} from './../../src/angular/table/table-fake-data';
/**
 * Created by M.S.BIT on 21/11/2017.
 */

export default experimentOn('Table')
    .case('Normal Table', {
        context: {
            data: tableData
        },
        showSource: true,
        template: `
      <sdc-table [rowsData]="data" #table>
        <sdc-table-body [maxHeight]="table.maxHeight" [fixedHeader]="table.fixedHeader">
            <sdc-table-header-row [headerCols]="table.headerCols" (onColClick)="table.onColumnHeaderClick($event)" [sortByField]="table.sortByField" table-header-row></sdc-table-header-row>
            <sdc-table-row *ngFor="let row of table.rowsData" [row]="row" [cols]="table.headerCols" table-row></sdc-table-row>
        </sdc-table-body>
      </sdc-table>
    `
    })
