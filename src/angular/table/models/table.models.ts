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
    metaData?:ITableMetadata;
    columns: {[col_key:string] : IColumnConfigModel}
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
    rowsInPage?: number;
    alignmentRow?: string;
    alignmentHeader?: string;
}

export interface IColumnConfigModel {
    key?: string;

    // Display
    title?: string;
    order: number;
    width?: string;

    // Functional
    sortable?: boolean;
    defaultSort?: boolean
    sortByField?: string;
    ascending?: boolean;
    clickable?: boolean;
    searchable?: boolean;

    // Types
    dataType: ColumnDataTypes;
    objectKey?: string;
    iconClass?: string;
    visible?: boolean;
    alignmentRow?:string;
    alignmentHeader?:string;
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
    value2?: string;
}

export interface IFilterGroup {
    filters: IFilterItem[];
}

export interface IComponentFilterGroup {
    filterGroup: IFilterGroup;
    clearFilterGroup(): void;
}

export enum FilterOperator {
    Equal,
    NotEqual,
    LessThan,
    LessThanOrEqual,
    GreaterThan,
    GreaterThanOrEqual,
    Range
}

/**
 * Pagination models
 */
export interface IPageCursor {
    pageNumber: number;
    rowsInPage: number;
}
