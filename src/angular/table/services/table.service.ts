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
     * Filter (uses IFilterItem interface)
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
        const field: string = row[filter.field].toString();
        const value: string = filter.value;

        if(col.searchable) {
            return this.filterStrings(field, value, filter.operator);
        }

        switch (col.dataType) {
            case ColumnDataTypes.Number:
                return this.filterNumbers(field, value, filter.operator);

            case ColumnDataTypes.Date:
                return this.filterDates(field, value, filter.operator);
        }

        return this.filterStrings(field, value, filter.operator);
    }

    private findColumnConfigModel(cols: IColumnConfigModel[], field: string) {
        return cols.find((item) => { return item.key == field });
    }

    /**
     * Compares two strings
     * @param {string} field
     * @param {string} value
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
    private filterStrings(field: string, value: string, operator: FilterOperator): boolean {
        const pos = 0;
        const length = field.length < value.length ? field.length : value.length;

        switch(operator) {
            case FilterOperator.Equal:
                return field.substr(pos, length).toLowerCase() == value.substr(pos, length).toLowerCase();

            case FilterOperator.NotEqual:
                return field.substr(pos, length).toLowerCase() != value.substr(pos, length).toLowerCase();

            case FilterOperator.LessThan:
                return field.substr(pos, length).toLowerCase() < value.substr(pos, length).toLowerCase();

            case FilterOperator.LessThanOrEqual:
                return field.substr(pos, length).toLowerCase() <= value.substr(pos, length).toLowerCase();

            case FilterOperator.GreaterThan:
                return field.substr(pos, length).toLowerCase() > value.substr(pos, length).toLowerCase();

            case FilterOperator.GreaterThanOrEqual:
                return field.substr(pos, length).toLowerCase() >= value.substr(pos, length).toLowerCase();
        }
    }

    /**
     * Compares two numbers
     * @param {string} field
     * @param {string} value
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
    private filterNumbers(field: string, value: string, operator: FilterOperator): boolean {
        switch(operator) {
            case FilterOperator.Equal:
                return +field == +value;

            case FilterOperator.NotEqual:
                return +field != +value;

            case FilterOperator.LessThan:
                return +field < +value;

            case FilterOperator.LessThanOrEqual:
                return +field <= +value;

            case FilterOperator.GreaterThan:
                return +field > +value;

            case FilterOperator.GreaterThanOrEqual:
                return +field >= +value;
        }
    }

    /**
     * Compares two dates
     * @param {string} field
     * @param {string} value
     * @param {FilterOperator} operator
     * @returns {boolean}
     */
    private filterDates(field: string, value: string, operator: FilterOperator): boolean {
        const fieldDate: Date = new Date(field);
        const valueDate: Date = new Date(value);

        switch(operator) {
            case FilterOperator.Equal:
                return this.getDateAsYearMonthDay(fieldDate) == this.getDateAsYearMonthDay(valueDate);

            case FilterOperator.NotEqual:
                return this.getDateAsYearMonthDay(fieldDate) != this.getDateAsYearMonthDay(valueDate);

            case FilterOperator.LessThan:
                return this.getDateAsYearMonthDay(fieldDate) < this.getDateAsYearMonthDay(valueDate);

            case FilterOperator.LessThanOrEqual:
                return this.getDateAsYearMonthDay(fieldDate) <= this.getDateAsYearMonthDay(valueDate);

            case FilterOperator.GreaterThan:
                return this.getDateAsYearMonthDay(fieldDate) > this.getDateAsYearMonthDay(valueDate);

            case FilterOperator.GreaterThanOrEqual:
                return this.getDateAsYearMonthDay(fieldDate) >= this.getDateAsYearMonthDay(valueDate);
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
