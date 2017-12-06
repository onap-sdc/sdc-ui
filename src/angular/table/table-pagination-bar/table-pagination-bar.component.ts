import {Component, Input, OnInit} from "@angular/core";
import {TableService} from "../services/table.service";
import {IPageCursor} from "../models/table.models";
import {CompaniesTableConfig} from "../config/table.contants";

@Component({
    selector: 'sdc-table-pagination-bar',
    templateUrl: './table-pagination-bar.component.html',
    styles: [`
        .sdc-table-pagination-bar__div {
            padding-top: 10px; 
            padding-bottom: 10px;
        }
        .sdc-table-pagination-bar__button {
            padding: 6px 20px;
        }
    `],
})

export class TablePaginationBarComponent implements OnInit {

    @Input() hidePanel: boolean = false;
    @Input() rowsData: any;
    pageData:any = [];

    nextDisabled;
    prevDisabled;

    pageCursor: IPageCursor;

    constructor(private tableService: TableService) {}

    ngOnInit(): void {
        this.pageCursor = {
            pageNumber: 1,
            rowsInPage: this.hidePanel ? +CompaniesTableConfig.metaData.rowsInPage: 10
        };

        this.firstPage();
    }

    updateRows(pageData){
        this.pageData = pageData;
        this.goPage(this.pageCursor.pageNumber);
    }

    public get currentPage() {
        return this.pageCursor.pageNumber;
    }

    public get totalPages() {
        return this.tableService.getTotalPages(this.rowsData, this.pageCursor);;
    }

    public get pageRows() {
        return this.pageData.length;
    }

    /**
     *  Infinity Scrolling
     */
    onScrollHitBottom(): void {
        if(CompaniesTableConfig.metaData && CompaniesTableConfig.metaData.infinityScrolling) {
            if(this.pageData.length < this.rowsData.length) {
                this.pageData = this.pageData.concat([], this.tableService.nextPage(this.rowsData, this.pageCursor));
            }
        }
    }

    clearInfinityScroll() {
        this.pageData = this.pageData.filter((item, index) => { return index < this.pageCursor.rowsInPage; });
        this.pageCursor.pageNumber = 1;
    }

    /**
     * Pagination
     */
    firstPage() {
        this.pageData = this.tableService.firstPage(this.rowsData, this.pageCursor);
        this.setDisabled();
    }

    nextPage() {
        this.pageData = this.tableService.nextPage(this.rowsData, this.pageCursor);
        this.setDisabled();
    }

    prevPage() {
        this.pageData = this.tableService.previousPage(this.rowsData, this.pageCursor);
        this.setDisabled();
    }

    lastPage() {
        this.pageData = this.tableService.lastPage(this.rowsData, this.pageCursor);
        this.setDisabled();
    }

    goPage(pageNo) {
        if(pageNo) {
            this.pageData = this.tableService.gotoPage(pageNo, this.rowsData, this.pageCursor);
            this.setDisabled();
        }
    }

    private setDisabled() {
        if (this.pageCursor.pageNumber == this.tableService.getFirstPageNumber()) {
            this.nextDisabled = false;
            this.prevDisabled = true;
        } else if (this.pageCursor.pageNumber ==
                   this.tableService.getLastPageNumber(this.rowsData.length, this.pageCursor.rowsInPage)) {
            this.nextDisabled = true;
            this.prevDisabled = false;
        } else {
            this.nextDisabled = false;
            this.prevDisabled = false;
        }
    }
}
