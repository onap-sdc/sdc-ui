/**
 * Created by M.S.BIT on 21/11/2017.
 */

import {Component, OnInit, Input} from "@angular/core";
import {CompaniesTableConfig} from "./table.contants";
import {IAppTableColumnsModel, IColumnConfigModel} from "./table.models";
import {tableData} from "./table-fake-data";
@Component({
    selector: 'sdc-table',
    templateUrl: './table.components.html',
    styles: []
})

export class TableComponent implements OnInit{
    public metaData = CompaniesTableConfig;
    public headerCols: IColumnConfigModel[] = [];
    @Input() sortByField: string;
    sortDescending = true;
    tableFieldsData = tableData;

    ngOnInit() {
        if (this.metaData && this.metaData.columns) {
            this.headerCols = this.prepMetaDataCols(this.metaData.columns);
        }
    }

    /**
     * Sort and construct metadata columns
     * @param {IAppTableColumnsModel} metaDataCols
     * @returns {({} & ColumnConfigModel & {key: string})[]}
     */
    prepMetaDataCols(metaDataCols: IAppTableColumnsModel) {
        return Object.keys(metaDataCols)
            .sort(this.sortColByOrder.bind(this))
            .map(colName => Object.assign({}, metaDataCols[colName], { key: colName }));
    }

    /**
     * Sort method by the @order param of the MetaData.columns object
     * @param colNameA
     * @param colNameB
     * @returns {number}
     */
    private sortColByOrder = function (colNameA: string, colNameB: string): number {
        return this.metaData.columns[colNameA].order - this.metaData.columns[colNameB].order;
    };

}
