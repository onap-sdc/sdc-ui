import {Injectable} from "@angular/core";
import { IAppTableColumnsModel, IColumnConfigModel, ColumnDataTypes, FilterOperator, IFilterItem, IFilterGroup
} from "../models/table.models";
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
        // const colKey = col.sortByField ? col.sortByField : col.key;
        const colKey = col.key;

        return  this.sortObjectsByField(rowsData, colKey, col.dataType, isDescending);
    }

    /**
     * Uses IFilterGroup interface (each IFilterGroup item includes IFilterItem array)
     * @param rowsData
     * @param {IColumnConfigModel[]} cols
     * @param {IFilterGroup[]} groups
     * @returns {any}
     */
    public groupFilter(rowsData: any, cols: IColumnConfigModel[], groups: IFilterGroup[]): any {

        groups.map((group) => {
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
     * Uses IFilterItem interface
     * @param rowsData
     * @param {IColumnConfigModel[]} cols
     * @param {IFilterItem[]} filters
     * @returns {any}
     */
    public itemFilter(rowsData: any, cols: IColumnConfigModel[], filters: IFilterItem[]): any {

        filters.map((filter) => {
            rowsData = rowsData.filter((row) => {
                const col: IColumnConfigModel = this.findColumnConfigModel(cols, filter.field);
                return this.isRowInFilter(row, col, filter);
            })
        });

        return rowsData;
    }

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
        const length = valueA.length < valueB.length ? valueA.length : valueB.length;

        switch(operator) {
            case FilterOperator.Equal:
                return valueA.substr(0, length).toLowerCase() == valueB.substr(0, length).toLowerCase();

            case FilterOperator.NotEqual:
                return valueA.substr(0, length).toLowerCase() != valueB.substr(0, length).toLowerCase();

            case FilterOperator.LessThan:
                return valueA.substr(0, length).toLowerCase() < valueB.substr(0, length).toLowerCase();

            case FilterOperator.LessThanOrEqual:
                return valueA.substr(0, length).toLowerCase() <= valueB.substr(0, length).toLowerCase();

            case FilterOperator.GreaterThan:
                return valueA.substr(0, length).toLowerCase() > valueB.substr(0, length).toLowerCase();

            case FilterOperator.GreaterThanOrEqual:
                return valueA.substr(0, length).toLowerCase() >= valueB.substr(0, length).toLowerCase();
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

/*
import {IColumnConfigModel, IFilterGroup, IFilterItem, FilterOperator} from "./models/table.models";

filterItems: IFilterItem[] = [];
filterGroups: IFilterGroup[] = [];

clearFilters(){
    this.modifiedData = this.rowsData;
    this.filterItems = [];
    this.filterGroups = [];
}

submitFilter(form: any) {
    //this.itemFilter(form);
    this.groupFilter(form);
}

itemFilter(form: any) {
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

groupFilter(form: any) {
    const colName = form.elements[0].value;
    const operator = form.elements[1].value;
    const value = form.elements[2].value;

    let group: IFilterGroup;

    if (this.filterGroups.length > 0) {
        group = this.filterGroups.find((group) => {
            return group.filters.find((item) => { return item.field == colName; }) ? true : false;
        });
    }

    if (!group) {
        this.filterGroups.push({ filters: [] });
        group = this.filterGroups[this.filterGroups.length - 1];
    }

    group.filters.push({
        field: colName,
        operator: +operator as FilterOperator,
        value: value
    });

    this.modifiedData = this.tableService.groupFilter(this.rowsData, this.headerCols, this.filterGroups);
}
*/


