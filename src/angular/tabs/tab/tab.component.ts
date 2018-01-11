import { Component, Input } from '@angular/core';

@Component({
    selector: 'sdc-tab',
    template: `
    <div *ngIf="active" class="sdc-tab-content" role="tabpanel">
      <ng-content></ng-content>
    </div>
    `
})
export class TabComponent {
    @Input() public title: string;
    @Input() public active: boolean = false;
    @Input() public disabled: boolean = false;

}
