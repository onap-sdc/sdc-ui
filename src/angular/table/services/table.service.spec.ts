import {TableService} from './table.service';
import {tableData} from '../table-fake-data';
import {
    ColumnDataTypes, FilterOperator, IColumnConfigModel, IFilterGroup, IFilterItem, IPageCursor,
    ITableConfig
} from '../models/table.models';
import {CompaniesTableConfig} from '../config/table.contants';

describe('TableService', () => {
    let service: TableService;
    let cursor: IPageCursor;
    let rowsData: any;
    let totalRows: number;
    let totalPages: number;
    let headerCols: IColumnConfigModel[];

    beforeEach(() => {
        service = new TableService();

        cursor = {
            pageNumber: 1,
            rowsInPage: +CompaniesTableConfig.metaData.rowsInPage
        };

        rowsData = tableData;
        totalRows = rowsData.length;
        totalPages = service.getLastPageNumber(rowsData.length, cursor.rowsInPage);

        headerCols = service.prepareColumnHeadersArray(CompaniesTableConfig.columns);
    });

    /**
     * Counters
     */
    it('getTotalRows method should return total rows', () => {
        expect(service.getTotalRows(rowsData)).toEqual(totalRows);
    });

    it('getTotalPages method should return total pages', () => {
        expect(service.getTotalPages(rowsData, cursor)).toEqual(totalPages);
    });

    /**
     * Pagination
     */
    it('lastPage method should return last page', () => {
        service.lastPage(rowsData, cursor);
        expect(cursor.pageNumber).toEqual(totalPages);
    });

    it('firstPage method should return first page', () => {
        service.firstPage(rowsData, cursor);
        expect(cursor.pageNumber).toEqual(service.getFirstPageNumber());
    });

    it('nextPage method should return page #2', () => {
        const pageNo = service.getFirstPageNumber() + 1;
        service.nextPage(rowsData, cursor);
        expect(cursor.pageNumber).toEqual(pageNo);
    });

    it('previousPage method should return page #1', () => {
        const pageNo = service.getFirstPageNumber();
        service.previousPage(rowsData, cursor);
        expect(cursor.pageNumber).toEqual(pageNo);
    });

    it('gotoPage method should return last page', () => {
        const pageNo = totalPages;
        service.gotoPage(pageNo, rowsData, cursor);
        expect(cursor.pageNumber).toEqual(pageNo);
    });

    /**
     * Sorting
     */
    it('sortColumn method should move first row to last row', () => {
        const field: string = "name";

        const col = headerCols.filter((item) => {
            return item.key.trim().toLowerCase() == field;
        })[0];

        let isDescending: boolean;

        // sort by acsending
        isDescending = false;
        service.sortColumn(rowsData, col, isDescending);
        const firstName: any = rowsData[0][field].toString();

        // sort by descending
        isDescending = true;
        service.sortColumn(rowsData, col, isDescending);
        const lastName: any = rowsData[rowsData.length - 1][field].toString();

        expect(firstName).toEqual(lastName);
    });

    /**
     * Filter
     */
    it('groupFilter method should return filtered rows', () => {
        const field: string = "companyId";
        let groups: IFilterGroup[] = [{ filters: [{
            field: field,
            operator: FilterOperator.LessThanOrEqual,
            value: "1"
        }] }];

        const rows1 = service.groupFilter(rowsData, headerCols, groups);
        const rows2 = rowsData.filter((item) => {
           return +item[field] <= 1;
        });
        expect(rows1.length).toEqual(rows2.length);
    });

    it('itemFilter method should return filtered rows', () => {
        const field: string = "companyId";
        let filters: IFilterItem[] = [{
            field: field,
            operator: FilterOperator.LessThanOrEqual,
            value: "1"
        }];

        const rows1 = service.itemFilter(rowsData, headerCols, filters);
        const rows2 = rowsData.filter((item) => {
            return +item[field] <= 1;
        });
        expect(rows1.length).toEqual(rows2.length);
    });
})
