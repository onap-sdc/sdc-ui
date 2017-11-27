import {Component, Input, ViewChild, TemplateRef, ViewContainerRef, OnInit, AfterViewInit} from "@angular/core";
/**
 * Created by M.S.BIT on 26/11/2017.
 */

@Component({
    selector:'sdc-table-body',
    templateUrl: './table-body.component.html'
})

export class TableBody implements AfterViewInit {
    /**
     * Table row headers content template (to be injected to correct container)
     */
    @ViewChild('headerRows') headerRows: TemplateRef<any>;
    /**
     * Table rows content template (to be injected to correct container)
     */
    @ViewChild('tableRows') tableRows: TemplateRef<any>;
    /**
     * Table row headers container - will contain table row headers content template
     */
    @ViewChild('headerRowsContainer', {read: ViewContainerRef}) headerRowsContainer: ViewContainerRef;
    /**
     * Table rows container - will contain table rows content template
     */
    @ViewChild('tableRowsContainer', {read: ViewContainerRef}) tableRowsContainer: ViewContainerRef;
    /**
     * Fixed header flag
     */
    @Input() fixedHeader = false;

    /**
     * Max height in pixels
     */
    @Input() maxHeight: number = 500;

    /**
     * Inject content template to containers when the view is ready
     */

    ngAfterViewInit(): void {
        if(this.headerRowsContainer){
            this.headerRowsContainer.createEmbeddedView(this.headerRows);
        }
        if(this.tableRowsContainer){
            this.tableRowsContainer.createEmbeddedView(this.tableRows);
        }
    }

}
