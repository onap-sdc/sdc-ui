
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

/*
<!-- pagination -->
<div style="padding-top: 10px; padding-bottom: 10px;">
    <form #form>
        <button type="button" class="sdc-table-filter-bar__button" (click)="firstPage()">First page</button>
        <button type="button" class="sdc-table-filter-bar__button" (click)="nextPage()">Next page</button>
        <button type="button" class="sdc-table-filter-bar__button" (click)="prevPage()">Previous page</button>
        <button type="button" class="sdc-table-filter-bar__button" (click)="lastPage()">Last page</button>
        <input type="text" style="width:50px;" />
        <button type="button" class="sdc-table-filter-bar__button" (click)="goPage(form.elements[4].value)">Go</button>
    </form>
</div>
*/

// table-component
//this.rowsData.forEach((item, index) => { item["companyId"] = index + 1; } );

/*
// table-filter-bar-component
import {TableService} from "../services/table.service";
import {tableData} from "../table-fake-data" // pagination

constructor(private tableService: TableService) {}

// Pagination
pageCursor: IPageCursor = {
    pageNumber: 1,
    rowsInPage: 15
};

firstPage() {
    const rows = this.tableService.firstPage(tableData, this.pageCursor);
}

lastPage() {
    const rows = this.tableService.lastPage(tableData, this.pageCursor);
}

nextPage() {
    const rows = this.tableService.nextPage(tableData, this.pageCursor);
}

prevPage() {
    const rows = this.tableService.previousPage(tableData, this.pageCursor);
}

goPage(pageNo) {
    const rows = this.tableService.gotoPage(pageNo, tableData, this.pageCursor);
}
*/
