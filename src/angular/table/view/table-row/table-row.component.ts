import {Component, Input} from "@angular/core";
/**
 * Created by M.S.BIT on 22/11/2017.
 */

@Component({
    selector: 'sdc-table-row',
    templateUrl: 'table-row.component.html',
    styles: []
})

export class TableRowComponent {
    @Input() row:any;
    @Input() cols: any[];
}
