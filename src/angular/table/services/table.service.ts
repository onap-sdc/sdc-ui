import {Injectable} from "@angular/core";
import {IAppTableColumnsModel, IColumnConfigModel} from "../models/table.models";
import {ITableDataServies} from "./table-data-service.interface";
/**
 * Created by M.S.BIT on 22/11/2017.
 */


@Injectable()
export class TableService implements ITableDataServies{

    public prepareColumnHeadersArray(metaDataCols: IAppTableColumnsModel):IColumnConfigModel[] {
        return Object.keys(metaDataCols)
            .sort(this.sortColumnHeadersOrder.bind(this, metaDataCols))
            .map(colName => Object.assign({}, metaDataCols[colName], { key: colName }));
    }

    public sortColumn(rowsData: any, col: IColumnConfigModel, isDescending: boolean):any {
        const colKey = col.sortByField ? col.sortByField : col.key;
        return  this.sortObjectsByField(rowsData, colKey, isDescending);
    }

    /**
     * Sort algorithm for sorting the column array by order (Set by the table config)
     * @param colNameA
     * @param colNameB
     * @returns {number}
     */
    private sortColumnHeadersOrder = function (columns: any, colNameA: string, colNameB: string): number {
        return columns[colNameA].order - columns[colNameB].order;
    };

    /**
     * Sort algorithm for sorting array of objects
     * @param items
     * @param prop
     * @param isDescending
     * @returns {any[]}
     */
    private sortObjectsByField(items: any[], prop: string, isDescending: boolean): any[]{
        return items.sort((a, b) => {
            const valueA = a[prop].toString();
            const valueB = b[prop].toString();

            return isDescending ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
        });
    };
}
