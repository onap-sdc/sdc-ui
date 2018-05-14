import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'tooltip-template',
    template: `
    <div class="sdc-tooltip-template-container">
        <ng-container #templateContainer></ng-container>
    </div>`
})

export class TooltipTemplateComponent implements AfterViewInit {
    @ViewChild('templateContainer', {read: ViewContainerRef}) public container: ViewContainerRef;

    public viewReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    ngAfterViewInit() : void {
        this.viewReady.next(true);
    }
}
