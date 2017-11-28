/**
 * Created by M.S.BIT on 21/11/2017.
 */
import {Component, OnInit, Input} from "@angular/core";
import {CompaniesTableConfig} from "./config/table.contants";
import {IColumnConfigModel} from "./models/table.models";
import {TableService} from "./services/table.service";


@Component({
    selector: 'sdc-table',
    templateUrl: './table.component.html',
    styles: []
})

export class TableComponent implements OnInit{
    /**
     * The static configuration of the table
     */
    public tableConfig = CompaniesTableConfig;

    /**
     * An array of table header objects (IColumnConfigModel)
     */
    public headerCols: IColumnConfigModel[] = [];

    /**
     * The field which the table should be sorted by
     */
    @Input() sortByField: string;

    /**
     * Ascending/Descending order flag. Default is Descending
     */
    @Input() sortDescending = true;

    /**
     * The actual table rows data
     */
    @Input() rowsData: any[];

    /**
     * Fixed header flag
     */
    @Input() fixedHeader = false;

    /**
     * Max height in pixels
     */
    @Input() maxHeight: number = 500;

    public modifiedData: any[];

    /**
     * Filtered content: The content which will be displayed
     */
    @Input() maxRowsToDisplay: number;

    @Input() textAlignment: string;

    constructor(private tableService: TableService){}

    ngOnInit() {
        if (this.tableConfig && this.tableConfig.columns) {
            this.headerCols = this.tableService.prepareColumnHeadersArray(this.tableConfig.columns);
        }
        if(this.tableConfig.metaData){
            console.log(this.tableConfig)
            this.fixedHeader = <boolean>this.tableConfig.metaData.fixedHeader || this.fixedHeader;
            this.maxHeight = <number>this.tableConfig.metaData.maxHeight || this.maxHeight;
            this.maxRowsToDisplay = <number>this.tableConfig.metaData.maxRowsToDisplay || this.maxRowsToDisplay;
            this.textAlignment = <string>this.tableConfig.metaData.textAlignment || 'center';
            console.log(this.textAlignment);
        }
        /**
         * Filtered content
         */
        this.modifiedData = this.rowsData;
    }

    public onColumnHeaderClick(col: IColumnConfigModel) {
        if (!col.sortable) {
            return;
        }

        // Reverse column sort direction
        if (this.sortByField === col.key) {
            this.sortDescending = !this.sortDescending;
        }
        else {
            this.sortByField    = col.key;
            this.sortDescending = true;
        }

        this.tableService.sortColumn(this.modifiedData, col, this.sortDescending);
    }

    public onScrollHitBottom(){
        if(this.tableConfig.metaData && this.tableConfig.metaData.infinityScrolling){
            //Load additional content
        }
    }
}
