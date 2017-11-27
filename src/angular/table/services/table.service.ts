import {Injectable} from "@angular/core";
import {IAppTableColumnsModel, IColumnConfigModel, ColumnDataTypes} from "../models/table.models";
import {ITableDataServies} from "./table-data-service.interface";
import {isUndefined} from 'util';
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
        //const colKey = col.sortByField ? col.sortByField : col.key;
        const colKey = col.key;

        return  this.sortObjectsByField(rowsData, colKey, col.dataType, isDescending);
    }

    public filterData(rowsData: any, col: IColumnConfigModel, filterItem: FilterItem): any {
        return rowsData.filter((item) => {
            const valueA: string = item[filterItem.Field].toString();
            const valueB: string = filterItem.Value;

            switch(col.dataType) {
                case ColumnDataTypes.Number:
                    return this.filterNumbers(valueA, valueB, filterItem.Operator);

                // case ColumnDataTypes.Date:
            }

            return this.filterStrings(valueA, valueB, filterItem.Operator);
        });
    }

    private filterStrings(valueA: string, valueB: string, operator: FilterOperator): boolean {
        switch(operator) {
            case FilterOperator.Equal:
                return valueA == valueB;

            case FilterOperator.NotEqual:
                return valueA != valueB;
        }
    }

    private filterNumbers(valueA: string, valueB: string, operator: FilterOperator): boolean {
        switch(operator) {
            case FilterOperator.Equal:
                return +valueA == +valueB;

            case FilterOperator.NotEqual:
                return +valueA != +valueB;

            case FilterOperator.Less:
                return +valueA < +valueB;

            case FilterOperator.LessEqual:
                return +valueA <= +valueB;

            case FilterOperator.Greater:
                return +valueA > +valueB;

            case FilterOperator.GreaterEqual:
                return +valueA >= +valueB;
        }
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
    private sortObjectsByField(items: any[], prop: string, dataType: ColumnDataTypes, isDescending: boolean): any[]{
        return items.sort((a, b) => {
            const valueA = a[prop] ? a[prop].toString() : '';
            const valueB = b[prop] ? b[prop].toString() : '';

            switch(dataType) {
                case ColumnDataTypes.Number:
                    return this.sortTwoNumbers(isDescending, valueA, valueB);

                case ColumnDataTypes.Date:
                    return this.sortTwoDates(isDescending, valueA, valueB);
            }

            return isDescending ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
        });
    };

    private sortTwoNumbers(isDescending: boolean, valueA: any, valueB: any): number {
        const value1: number = isNaN(valueA) ? 0 : +valueA;
        const value2: number = isNaN(valueB) ? 0 : +valueB;

        return isDescending ? value2 - value1 : value1 - value2;
    }

    private sortTwoDates(isDescending: boolean, valueA: any, valueB: any): number {
        valueA = this.getDateAsYearMonthDay(new Date(valueA));
        valueB = this.getDateAsYearMonthDay(new Date(valueB));

        return isDescending ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
    }

    /**
     * Get date as string in format YYYY-MM-DD
     * @param {Date} date
     * @returns {string}
     */
    private getDateAsYearMonthDay(date: Date): string {
        return (date.getFullYear().toString() as any) + '-' +
               ((date.getMonth() + 1).toString() as any).padStart(2, '0') + '-' +
               (date.getDate().toString() as any).padStart(2, '0');
    }
}

export interface FilterItem {
    Field: string;
    Operator: FilterOperator;
    Value: string;
}

export enum FilterOperator {
    Equal,
    NotEqual,
    Less,
    LessEqual,
    Greater,
    GreaterEqual
}

/*
        const filterItem: FilterItem = {
            Field: "companyId",
            Operator: FilterOperator.LessEqual,
            Value: "10"
        };

        this.tableService.filterData(this.rowsData, col, filterItem);
*/
git
