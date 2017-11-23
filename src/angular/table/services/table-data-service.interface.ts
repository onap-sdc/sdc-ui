import {IAppTableColumnsModel, IColumnConfigModel} from "../models/table.models";
/**
 * Created by M.S.BIT on 23/11/2017.
 */
export interface ITableDataServies {
    /**
     * Sort and construct column headers
     * @param {IAppTableColumnsModel} metaDataCols
     * @returns {IColumnConfigModel[]} returns an array of IColumnConfigModel objects
     */
    prepareColumnHeadersArray(metaDataCols: IAppTableColumnsModel):IColumnConfigModel[];

    /**
     * Sort specific column fields
     * @param rowsData
     * @param col
     * @param isDescending
     * @returns {any[]}
     */
    sortColumn(rowsData: any, col: IColumnConfigModel, isDescending: boolean):any
}
