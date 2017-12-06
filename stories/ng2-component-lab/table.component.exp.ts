import {experimentOn} from "@islavi/ng2-component-lab";
import {tableData} from './../../src/angular/table/table-fake-data';
/**
 * Created by M.S.BIT on 21/11/2017.
 */
export default experimentOn('Table')
    .group('Normal Table', [{
        id: 'normalTable',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template: `
      <sdc-table [rowsData]="data" #table1>
        
        <sdc-table-body (scrollHitBottom)="table1.onScrollHitBottom()" [maxHeight]="table1.maxHeight" [fixedHeader]="false">
            <sdc-table-header-row [headerCols]="table1.headerCols" (onColClick)="table1.onColumnHeaderClick($event)" [sortByField]="table1.sortByField" [sortDescending]="table1.sortDescending" table-header-row></sdc-table-header-row>
            <sdc-table-row *ngFor="let row of table1.modifiedData" [row]="row" [cols]="table1.headerCols" table-row></sdc-table-row>
        </sdc-table-body>
      </sdc-table>
    `
    }, {
        id: 'normalTableFixedHeader',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template: `
      <sdc-table [rowsData]="data" #table2>
        
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
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template: `
      <sdc-table [rowsData]="data" #table3>
        <sdc-table-filter-bar [headerCols]="table3.headerCols" (changed)="table3.handleFilter($event)"></sdc-table-filter-bar>
        <sdc-table-body (scrollHitBottom)="table3.onScrollHitBottom()" [maxHeight]="table3.maxHeight" [fixedHeader]="table3.fixedHeader">
            <sdc-table-header-row [headerCols]="table3.headerCols" (onColClick)="table3.onColumnHeaderClick($event)" [sortByField]="table3.sortByField" [sortDescending]="table3.sortDescending" table-header-row></sdc-table-header-row>
            <sdc-table-row *ngFor="let row of table3.modifiedData" [row]="row" [cols]="table3.headerCols" table-row></sdc-table-row>
        </sdc-table-body>
      </sdc-table>
    `
    }, {
        id: 'normalTablePages',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template: `
      <sdc-table [rowsData]="data" #table4>
        <sdc-table-filter-bar [hidePanel]="true" [headerCols]="table4.headerCols" (changed)="table4.handleFilter($event)"></sdc-table-filter-bar>
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
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template: `
      <sdc-table [rowsData]="data" (changed)="paginationBar.updateRows($event)" #table5>
        <sdc-table-pagination-bar [rowsData]="table5.modifiedData" #paginationBar></sdc-table-pagination-bar>
        <sdc-table-body [maxHeight]="table5.maxHeight" [fixedHeader]="table5.fixedHeader">
            <sdc-table-header-row [headerCols]="table5.headerCols" (onColClick)="table5.onColumnHeaderClick($event)" [sortByField]="table5.sortByField" [sortDescending]="table5.sortDescending" table-header-row></sdc-table-header-row>
            <sdc-table-row *ngFor="let row of paginationBar.pageData" [row]="row" [cols]="table5.headerCols" table-row></sdc-table-row>
        </sdc-table-body>
      </sdc-table>
    `
    }, {
        id: 'normalTableInfinityScroll',
        context: {
            data: [].concat(tableData)
        },
        showSource: true,
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template: `
      <sdc-table [rowsData]="data" #table6>
        <sdc-table-pagination-bar [hidePanel]="true" [rowsData]="table6.modifiedData" #paginationBar></sdc-table-pagination-bar>
        <sdc-table-body (scrollHitBottom)="paginationBar.onScrollHitBottom()" [maxHeight]="table6.maxHeight" [fixedHeader]="table6.fixedHeader">
            <sdc-table-header-row [headerCols]="table6.headerCols" (onColClick)="table6.onColumnHeaderClick($event)" [sortByField]="table6.sortByField" [sortDescending]="table6.sortDescending" table-header-row></sdc-table-header-row>
            <sdc-table-row *ngFor="let row of paginationBar.pageData" [row]="row" [cols]="table6.headerCols" table-row></sdc-table-row>
        </sdc-table-body>
      </sdc-table>
    `
    }])
