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

    public filterData(rowsData: any, cols: IColumnConfigModel[], filterItems: FilterItem[]): any {

        filterItems.map((filterItem) => {
            rowsData = rowsData.filter((item) => {
                const valueA: string = item[filterItem.Field].toString();
                const valueB: string = filterItem.Value;
                const col: IColumnConfigModel = cols.find((item) => { return item.key == filterItem.Field });

                switch (col.dataType) {
                    case ColumnDataTypes.Number:
                        return this.filterNumbers(valueA, valueB, filterItem.Operator);

                    case ColumnDataTypes.Date:
                        return this.filterDates(valueA, valueB, filterItem.Operator);
                }

                return this.filterStrings(valueA, valueB, filterItem.Operator);
            })
        });

        return rowsData;
    }

    /**
     * Compares two strings
     * @param {string} valueA
     * @param {string} valueB
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
    private filterStrings(valueA: string, valueB: string, operator: FilterOperator): boolean {
        const length = valueA.length < valueB.length ? valueA.length : valueB.length;

        switch(operator) {
            case FilterOperator.Equal:
                return valueA.substr(0, length).toLowerCase() == valueB.substr(0, length).toLowerCase();

            case FilterOperator.NotEqual:
                return valueA.substr(0, length).toLowerCase() != valueB.substr(0, length).toLowerCase();
        }
    }

    /**
     * Compares two numbers
     * @param {string} valueA
     * @param {string} valueB
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
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
     * Compares two dates
     * @param {string} valueA
     * @param {string} valueB
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
    private filterDates(valueA: string, valueB: string, operator: FilterOperator): boolean {
        const dateA: Date = new Date(valueA);
        const dateB: Date = new Date(valueB);

        switch(operator) {
            case FilterOperator.Equal:
                return this.getDateAsYearMonthDay(dateA) == this.getDateAsYearMonthDay(dateB);

            case FilterOperator.NotEqual:
                return this.getDateAsYearMonthDay(dateA) != this.getDateAsYearMonthDay(dateB);

            case FilterOperator.Less:
                return this.getDateAsYearMonthDay(dateA) < this.getDateAsYearMonthDay(dateB);

            case FilterOperator.LessEqual:
                return this.getDateAsYearMonthDay(dateA) <= this.getDateAsYearMonthDay(dateB);

            case FilterOperator.Greater:
                return this.getDateAsYearMonthDay(dateA) > this.getDateAsYearMonthDay(dateB);

            case FilterOperator.GreaterEqual:
                return this.getDateAsYearMonthDay(dateA) >= this.getDateAsYearMonthDay(dateB);
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
import {TableService, FilterItem, FilterOperator} from "./services/table.service";

// for testing only
const filterItems: FilterItem[] =
    [{
        Field: "formattedCreationDate", // "usersCount", // "companyId",
        Operator: FilterOperator.LessEqual,
        Value: "12/20/2016"
    },
        {
            Field: "companyId", // "usersCount", // "companyId",
            Operator: FilterOperator.LessEqual,
            Value: "40"
        }];
this.rowsData = this.tableService.filterData(this.rowsData, this.headerCols, filterItems);
// for testing only
*/


