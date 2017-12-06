import {Injectable} from "@angular/core";
import {IAppTableColumnsModel, IColumnConfigModel, ColumnDataTypes,
        FilterOperator, IFilterItem, IFilterGroup, IPageCursor} from "../models/table.models";
import {ITableDataServies} from "./table-data-service.interface";

/**
 * Created by M.S.BIT on 22/11/2017.
 */


@Injectable()
export class TableService implements ITableDataServies{

    /**
     * Counters
     */
    public getTotalRows(rowsData: any): number {
        return rowsData.length;
    }

    public getTotalPages(rowsData: any, cursor: IPageCursor): number {
        return this.getLastPageNumber(rowsData.length, cursor.rowsInPage);
    }

    /**
     * Init column headers
     * @param {IAppTableColumnsModel} metaDataCols
     * @returns {IColumnConfigModel[]}
     */
    public prepareColumnHeadersArray(metaDataCols: IAppTableColumnsModel):IColumnConfigModel[] {
        return Object.keys(metaDataCols)
            .sort(this.sortColumnHeadersOrder.bind(this, metaDataCols))
            .map(colName => Object.assign({}, metaDataCols[colName], { key: colName }));
    }

    /**
     * Sorting
     */

    public sortColumn(rowsData: any, col: IColumnConfigModel, isDescending: boolean):any {
        // const colKey = col.sortByField ? col.sortByField : col.key;
        const colKey = col.key;

        return  this.sortObjectsByField(rowsData, colKey, col.dataType, isDescending);
    }

    /**
     * Filter
     */

    /**
     * Filter Group  (uses IFilterGroup interface) - each group includes array of the filters
     * @param rowsData
     * @param {IColumnConfigModel[]} cols
     * @param {IFilterGroup[]} groups
     * @returns {any}
     */
    public groupFilter(rowsData: any, cols: IColumnConfigModel[], groups: IFilterGroup[]): any {

        groups.forEach((group) => {
            rowsData = rowsData.filter((row) => {
                const filterItems: IFilterItem[] = group.filters.filter((filter) => {
                    const col: IColumnConfigModel = this.findColumnConfigModel(cols, filter.field);
                    return this.isRowInFilter(row, col, filter);
                });

                return filterItems && filterItems.length > 0;
            });
        });

        return rowsData;
    }

    /**
     * Filter (uses IFilterItem interface) - part of the filter group
     * @param rowsData
     * @param {IColumnConfigModel[]} cols
     * @param {IFilterItem[]} filters
     * @returns {any}
     */
    public itemFilter(rowsData: any, cols: IColumnConfigModel[], filters: IFilterItem[]): any {

        filters.forEach((filter) => {
            rowsData = rowsData.filter((row) => {
                const col: IColumnConfigModel = this.findColumnConfigModel(cols, filter.field);
                return this.isRowInFilter(row, col, filter);
            })
        });

        return rowsData;
    }

    /**
     * Pagination
     */

    /**
     * Go to first page
     * @param rowsData
     * @param {IPageCursor} cursor
     * @returns {any}
     */
    public firstPage(rowsData: any, cursor: IPageCursor): any {
        cursor.pageNumber = this.getFirstPageNumber();
        return this.getPage(rowsData, cursor);
    }

    /**
     * Go to last page
     * @param rowsData
     * @param {IPageCursor} cursor
     * @returns {any}
     */
    public lastPage(rowsData: any, cursor: IPageCursor): any {
        const totalRows = rowsData.length;
        cursor.pageNumber = this.getLastPageNumber(totalRows, cursor.rowsInPage);

        return this.getPage(rowsData, cursor);
    }

    /**
     * Go to next page
     * @param rowsData
     * @param {IPageCursor} cursor
     * @returns {any}
     */
    public nextPage(rowsData: any, cursor: IPageCursor): any {
        const totalRows = rowsData.length;

        if(cursor.pageNumber < this.getLastPageNumber(totalRows, cursor.rowsInPage)) {
            cursor.pageNumber++;
            return this.getPage(rowsData, cursor);
        }

        return null;
    }

    /**
     * Go to previous page
     * @param rowsData
     * @param {IPageCursor} cursor
     * @returns {any}
     */
    public previousPage(rowsData: any, cursor: IPageCursor): any {
        if(cursor.pageNumber > this.getFirstPageNumber()) {
            cursor.pageNumber--;
            return this.getPage(rowsData, cursor);
        }

        return null;
    }

    /**
     * Go to page by page number
     * @param {number} pageNumber
     * @param rowsData
     * @param {IPageCursor} cursor
     * @returns {any}
     */
    public gotoPage(pageNumber: number, rowsData: any, cursor: IPageCursor): any {
        const totalRows = rowsData.length;

        if (pageNumber >= this.getFirstPageNumber() &&
            pageNumber <= this.getLastPageNumber(totalRows, cursor.rowsInPage)) {
            cursor.pageNumber = pageNumber;
            return this.getPage(rowsData, cursor);
        }

        return null;
    }

    /**
     * Returns page by page number
     * @param rowsData
     * @param {IPageCursor} cursor
     * @returns {any}
     */
    private getPage(rowsData: any, cursor: IPageCursor): any {
        const firstRow =  this.getFirstRowInPage(cursor.pageNumber, cursor.rowsInPage);
        const lastRow = this.getLastRowInPage(cursor.pageNumber, cursor.rowsInPage);

        return rowsData.filter((row, index) => {
            return index >= firstRow && index <= lastRow;
        });
    }

    /**
     * Returns first row number in the page
     * @param {number} pageNumber
     * @param {number} rowsInPage
     * @returns {number}
     */
    private getFirstRowInPage(pageNumber: number, rowsInPage: number): number {
        return rowsInPage * (pageNumber - 1);
    }

    /**
     * Returns last row number in the page
     * @param {number} pageNumber
     * @param {number} rowsInPage
     * @returns {number}
     */
    private getLastRowInPage(pageNumber: number, rowsInPage: number): number {
        return rowsInPage * pageNumber - 1;
    }

    /**
     * Returns first page number
     * @returns {number}
     */
    public getFirstPageNumber(): number {
        return 1;
    }

    /**
     * Returns last page number
     * @param {number} totalRows
     * @param {number} rowsInPage
     * @returns {number}
     */
    public getLastPageNumber(totalRows: number, rowsInPage: number): number {
        const pageNo: number = Math.floor(totalRows / rowsInPage) + (totalRows % rowsInPage > 0 ? 1 : 0);
        return pageNo;
    }

    /**
     *  Filter
     */

    /**
     * Iteration (checks each row by filter criteries)
     * @param row
     * @param {IColumnConfigModel} col
     * @param {IFilterItem} filter
     * @returns {any}
     */
    private isRowInFilter(row: any, col: IColumnConfigModel, filter: IFilterItem): any {
        const valueA: string = row[filter.field].toString();
        const valueB: string = filter.value;

        if(col.searchable) {
            return this.filterStrings(valueA, valueB, filter.operator);
        }

        switch (col.dataType) {
            case ColumnDataTypes.Number:
                return this.filterNumbers(valueA, valueB, filter.operator);

            case ColumnDataTypes.Date:
                return this.filterDates(valueA, valueB, filter.operator);
        }

        return this.filterStrings(valueA, valueB, filter.operator);
    }

    private findColumnConfigModel(cols: IColumnConfigModel[], field: string) {
        return cols.find((item) => { return item.key == field });
    }

    /**
     * Compares two strings
     * @param {string} valueA
     * @param {string} valueB
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
    private filterStrings(valueA: string, valueB: string, operator: FilterOperator): boolean {
        const pos = 0;
        const length = valueA.length < valueB.length ? valueA.length : valueB.length;

        switch(operator) {
            case FilterOperator.Equal:
                return valueA.substr(pos, length).toLowerCase() == valueB.substr(0, length).toLowerCase();

            case FilterOperator.NotEqual:
                return valueA.substr(pos, length).toLowerCase() != valueB.substr(0, length).toLowerCase();

            case FilterOperator.LessThan:
                return valueA.substr(pos, length).toLowerCase() < valueB.substr(0, length).toLowerCase();

            case FilterOperator.LessThanOrEqual:
                return valueA.substr(pos, length).toLowerCase() <= valueB.substr(0, length).toLowerCase();

            case FilterOperator.GreaterThan:
                return valueA.substr(pos, length).toLowerCase() > valueB.substr(0, length).toLowerCase();

            case FilterOperator.GreaterThanOrEqual:
                return valueA.substr(pos, length).toLowerCase() >= valueB.substr(0, length).toLowerCase();
        }
    }

    private getPosition(text: string): number {
        if(!text) {
            return 0;
        }

        if (text.trim().substr(0, 1) == '*') {
            return 0;
        }

        return 0;
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

            case FilterOperator.LessThan:
                return +valueA < +valueB;

            case FilterOperator.LessThanOrEqual:
                return +valueA <= +valueB;

            case FilterOperator.GreaterThan:
                return +valueA > +valueB;

            case FilterOperator.GreaterThanOrEqual:
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

            case FilterOperator.LessThan:
                return this.getDateAsYearMonthDay(dateA) < this.getDateAsYearMonthDay(dateB);

            case FilterOperator.LessThanOrEqual:
                return this.getDateAsYearMonthDay(dateA) <= this.getDateAsYearMonthDay(dateB);

            case FilterOperator.GreaterThan:
                return this.getDateAsYearMonthDay(dateA) > this.getDateAsYearMonthDay(dateB);

            case FilterOperator.GreaterThanOrEqual:
                return this.getDateAsYearMonthDay(dateA) >= this.getDateAsYearMonthDay(dateB);
        }
    }

    /**
     * Sorting
     */

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

    /**
     * Checks two numbers sorting
     * @param {boolean} isDescending
     * @param valueA
     * @param valueB
     * @returns {number}
     */
    private sortTwoNumbers(isDescending: boolean, valueA: any, valueB: any): number {
        const value1: number = isNaN(valueA) ? 0 : +valueA;
        const value2: number = isNaN(valueB) ? 0 : +valueB;

        return isDescending ? value2 - value1 : value1 - value2;
    }

    /**
     * Checks two dates sorting
     * @param {boolean} isDescending
     * @param valueA
     * @param valueB
     * @returns {number}
     */
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
