import {experimentOn} from "@islavi/ng2-component-lab";
import {tableData} from './../../src/angular/table/table-fake-data';
/**
 * Created by M.S.BIT on 21/11/2017.
 */

export default experimentOn('Table')
    .group('Table', [
        {
            id: 'normalTableWithFilters',
            context: {
                data: [].concat(tableData)
            },
            showSource: true,
            title: 'Table with Filters',
            description: 'Table with filters',
            template: `
          <sdc-table [rowsData]="data" #table3>
          <sdc-table-filter [headerCols]="table0.headerCols" (changed)="table0.handleFilter($event)"></sdc-table-filter>
            <span>Rows: {{table0.modifiedRows}} / {{table0.totalRows}}</span>
            <sdc-table-body (scrollHitBottom)="table0.onScrollHitBottom()" [maxHeight]="table0.maxHeight" [fixedHeader]="table0.fixedHeader">
                <sdc-table-header-row [headerCols]="table0.headerCols" (onColClick)="table0.onColumnHeaderClick($event)" [sortByField]="table0.sortByField" [sortDescending]="table0.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of table0.modifiedData" [row]="row" [cols]="table0.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
        },{
        id: 'normalTable',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Normal Table',
        description: 'Normal table without fixed header',
        template: `
          <sdc-table [rowsData]="data" #table1>
            <span>Rows: {{table1.totalRows}}</span>
            <sdc-table-body (scrollHitBottom)="table1.onScrollHitBottom()" [maxHeight]="table1.maxHeight" [fixedHeader]="false">
                <sdc-table-header-row [headerCols]="table1.headerCols" (onColClick)="table1.onColumnHeaderClick($event)" [sortByField]="table1.sortByField" [sortDescending]="table1.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of table1.modifiedData" [row]="row" [cols]="table1.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
    },{
        id: 'normalTableFixedHeader',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Normal Table with Fixed Header',
        description: 'Normal table with fixed header',
        template: `
          <sdc-table [rowsData]="data" #table2>
            <span>Rows: {{table2.totalRows}}</span>
            <sdc-table-body (scrollHitBottom)="table2.onScrollHitBottom()" [maxHeight]="table2.maxHeight" [fixedHeader]="true">
                <sdc-table-header-row [headerCols]="table2.headerCols" (onColClick)="table2.onColumnHeaderClick($event)" [sortByField]="table2.sortByField" [sortDescending]="table2.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of table2.modifiedData" [row]="row" [cols]="table2.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
    },{
        id: 'normalTableWithFilters',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Table with Filters',
        description: 'Table with filters',
        template: `
          <sdc-table [rowsData]="data" #table3>
          <sdc-table-filter [headerCols]="table3.headerCols" (changed)="table3.handleFilter($event)"></sdc-table-filter>
            <span>Rows: {{table3.modifiedRows}} / {{table3.totalRows}}</span>
            <sdc-table-body (scrollHitBottom)="table3.onScrollHitBottom()" [maxHeight]="table3.maxHeight" [fixedHeader]="table3.fixedHeader">
                <sdc-table-header-row [headerCols]="table3.headerCols" (onColClick)="table3.onColumnHeaderClick($event)" [sortByField]="table3.sortByField" [sortDescending]="table3.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of table3.modifiedData" [row]="row" [cols]="table3.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
    },{
        id: 'normalTablePages',
        context: {
            data: [].concat(tableData)
        },
        title: 'Table with Search',
        description: 'Table with search',
        showSource: true,
        template: `
          <sdc-table [rowsData]="data" #table4>
            <sdc-table-search-filter [headerCols]="table4.headerCols" (changed)="table4.handleFilter($event)"></sdc-table-search-filter>
            <span>Rows: {{table4.modifiedRows}} / {{table4.totalRows}}</span>
            <sdc-table-body (scrollHitBottom)="table4.onScrollHitBottom()" [maxHeight]="table4.maxHeight" [fixedHeader]="table4.fixedHeader">
                <sdc-table-header-row [headerCols]="table4.headerCols" (onColClick)="table4.onColumnHeaderClick($event)" [sortByField]="table4.sortByField" [sortDescending]="table4.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of table4.modifiedData" [row]="row" [cols]="table4.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
    }, {
        id: 'normalTablePagination',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Table with Pagination',
        description: 'Table with pagination',
        template: `
          <sdc-table [rowsData]="data" (changed)="paginationBar5.updateRows($event)" #table5>
            <sdc-table-pagination-bar [rowsData]="table5.modifiedData" #paginationBar5></sdc-table-pagination-bar>
            <span>Pages: {{paginationBar5.currentPage}} / {{paginationBar5.totalPages}}</span>
            <sdc-table-body [maxHeight]="table5.maxHeight" [fixedHeader]="table5.fixedHeader">
                <sdc-table-header-row [headerCols]="table5.headerCols" (onColClick)="table5.onColumnHeaderClick($event)" [sortByField]="table5.sortByField" [sortDescending]="table5.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of paginationBar5.pageData" [row]="row" [cols]="table5.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
    }, {
        id: 'normalTableInfinityScroll',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Table with Infinity Scroll',
        description: 'Table with infinity scroll',
        template: `
          <sdc-table [rowsData]="data" (changed)="paginationBar6.updateRows($event)" #table6>
            <sdc-table-pagination-bar [hidePanel]="true" [rowsData]="table6.modifiedData" #paginationBar6></sdc-table-pagination-bar>
            <span>Rows: {{paginationBar6.pageRows}} / {{table6.totalRows}}</span>
            <sdc-table-body (scrollHitBottom)="paginationBar6.onScrollHitBottom()" [maxHeight]="table6.maxHeight" [fixedHeader]="table6.fixedHeader">
                <sdc-table-header-row [headerCols]="table6.headerCols" (onColClick)="table6.onColumnHeaderClick($event)" [sortByField]="table6.sortByField" [sortDescending]="table6.sortDescending" table-header-row></sdc-table-header-row>
                <sdc-table-row *ngFor="let row of paginationBar6.pageData" [row]="row" [cols]="table6.headerCols" table-row></sdc-table-row>
            </sdc-table-body>
          </sdc-table>
        `
    }
]);
