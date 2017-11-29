/**
 * Created by M.S.BIT on 21/11/2017.
 */

/**********************************
 * Table configuration models
 **********************************/

export class TableModel {
    constructor(public columns: IAppTableColumnsModel, public rows: IAppTableRowModel) {}
}
export interface ITableConfig {
    metaData?: {[col_key:string] : ITableMetadata}
    columns: {[col_key:string] : IColumnConfigModel}
    rows: {[row_key:string] : any}
}
interface IAppTableRowModel {
    // Functionality
    clickable?: boolean;
}

export interface ITableMetadata {
    fixedHeader?: boolean;
    maxHeight?: number;
    maxRowsToDisplay?: number;
    infinityScrolling?: boolean;
}

export interface IColumnConfigModel {
    key?: string;

    // Display
    title?: string;
    order: number;
    width?: string;

    // Functional
    sortable?: boolean;
    sortByField?: string;
    ascending?: boolean;
    clickable?: boolean;

    // Types
    dataType: ColumnDataTypes;
    objectKey?: string;
    iconClass?: string;
    visible?: boolean;
}
export interface IAppTableColumnsModel {
    [colName: string]: IColumnConfigModel;
}

export enum ColumnDataTypes {
    Text,
    Array,
    Icon,
    Html,
    Number,
    Date
}

/**********************************
 * Table service models
 **********************************/

/**
 * Filter models
 */
export interface IFilterItem {
    field: string;
    operator: FilterOperator;
    value: string;
}

export interface IFilterGroup {
    filters: IFilterItem[];
}

export enum FilterOperator {
    Equal,
    NotEqual,
    LessThan,
    LessThanOrEqual,
    GreaterThan,
    GreaterThanOrEqual
}
