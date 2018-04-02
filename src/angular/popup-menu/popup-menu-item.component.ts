import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PopupMenuListComponent } from "./popup-menu-list.component";

@Component({
    selector: 'popup-menu-item',
    template:
        `<li [ngClass]="[className || '', type || '', type == 'separator'? '': 'sdc-menu-item']" (click)="performAction($event)">
    <ng-content *ngIf="type != 'separator'"></ng-content>
</li>`
})
export class PopupMenuItemComponent {
    @Input() public className: string;
    @Input() public type: undefined|'disabled'|'selected'|'separator';
    @Output() public action: EventEmitter<any> = new EventEmitter<any>();

    public parentMenu: PopupMenuListComponent;
    public index: number = 0;

    public performAction(evt) {
        evt.stopPropagation();

        if (['disabled', 'separator'].indexOf(this.type) !== -1) {
            return;
        }

        if (this.parentMenu instanceof PopupMenuListComponent) {
            this.parentMenu.open = false;
        }

        if (this.action) {
            this.action.emit();
        }
    }
}
