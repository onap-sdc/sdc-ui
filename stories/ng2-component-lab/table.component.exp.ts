import {experimentOn} from "@islavi/ng2-component-lab";
import {tableData} from './../../src/angular/table/table-fake-data';

export default experimentOn('Table')
    .case('Normal Table', {
        context: {
            data: tableData
        },
        showSource: true,
        template: `
      <sdc-table [rowsData]="data"></sdc-table>
    `
    })/**
 * Created by M.S.BIT on 21/11/2017.
 */
