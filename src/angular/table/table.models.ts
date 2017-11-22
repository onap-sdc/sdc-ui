/**
 * Created by M.S.BIT on 21/11/2017.
 */
export class TableModel {
    constructor(public columns: IAppTableColumnsModel, public rows: IAppTableRowModel) {}
}
export interface ITableConfig {
    columns: {[col_key:string] : IColumnConfigModel}
    rows: {[row_key:string] : any}
}
interface IAppTableRowModel {
    // Functionality
    clickable?: boolean;
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
}
export interface IAppTableColumnsModel {
    [colName: string]: IColumnConfigModel;
}

export enum ColumnDataTypes {
    Text,
    Array,
    Icon,
    Html
}
