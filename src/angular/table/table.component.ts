/**
 * Created by M.S.BIT on 21/11/2017.
 */
import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";
import {CompaniesTableConfig} from "./config/table.contants";
import {IColumnConfigModel, IFilterItem, FilterOperator, IFilterGroup} from "./models/table.models";
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

    @Input() alignmentRow: string;

    @Input() alignmentHeader: string;

    /**
     * Modified data changed EventEmitter
     */
    @Output('changed') dataChanged: EventEmitter<any[]> = new EventEmitter();

    constructor(private tableService: TableService){}

    ngOnInit() {
        if (this.tableConfig && this.tableConfig.columns) {
            this.headerCols = this.tableService.prepareColumnHeadersArray(this.tableConfig.columns);
        }
        if(this.tableConfig.metaData){
            this.fixedHeader = <boolean>this.tableConfig.metaData.fixedHeader || this.fixedHeader;
            this.maxHeight = <number>this.tableConfig.metaData.maxHeight || this.maxHeight;
            this.maxRowsToDisplay = <number>this.tableConfig.metaData.maxRowsToDisplay || this.maxRowsToDisplay;
            this.alignmentRow = <string>this.tableConfig.metaData.aligmentRow || 'center';
            this.alignmentHeader = <string>this.tableConfig.metaData.alignmentHeader|| 'center';
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

        if (this.sortByField === col.key) {
            this.sortDescending = !this.sortDescending;
        }
        else {
            this.sortByField    = col.key;
            this.sortDescending = true;
        }
        this.setModifiedData(this.tableService.sortColumn(this.modifiedData, col, this.sortDescending));
    }

    public setModifiedData(modifiedData: any[]):void {
        this.modifiedData = modifiedData;
        this.dataChanged.next(this.modifiedData);
    }

    public onScrollHitBottom(){
        if(this.tableConfig.metaData && this.tableConfig.metaData.infinityScrolling){
            //Load additional content
        }
    }

    filterItems: IFilterItem[] = [];

    clearFilters(){
        this.modifiedData = this.rowsData;
        this.filterItems = [];
    }

    submitFilter(form: any){
        const colName = form.elements[0].value;
        const operator = form.elements[1].value;
        const value = form.elements[2].value;


        const item: IFilterItem = this.filterItems.find((item) => { return item.field == colName; });
        if (item) {
           item.operator = +operator as FilterOperator;
           item.value = value;
        } else {
            this.filterItems.push({
                field: colName,
                operator: +operator as FilterOperator,
                value: value
            });
        }

        this.modifiedData = this.tableService.itemFilter(this.rowsData, this.headerCols, this.filterItems);
    }

    handleFilter(filters: IFilterGroup[]){
        this.modifiedData = this.tableService.groupFilter(this.rowsData, this.headerCols, filters);
    }
}
