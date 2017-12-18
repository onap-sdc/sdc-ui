import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {PopupMenuListComponent} from "./popup-menu-list.component";

@Component({
    selector: 'popup-menu-item',
    template:
        `<div class="sdc-menu-item" [ngClass]="[className || '', type || '']" (click)="performAction($event)">
    <ng-content *ngIf="showContent"></ng-content>
</div>`
})
export class PopupMenuItemComponent implements OnChanges {
    @Input() public className: string;
    @Input() public type: undefined|'disabled'|'selected'|'line';
    @Output() public action: EventEmitter<any> = new EventEmitter<any>();

    public parentMenu: PopupMenuListComponent;
    public index: number = 0;
    public showContent: boolean = true;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.type) {
            switch (changes.type.currentValue) {
                case 'line':
                    this.showContent = false;
                    break;
                default:
                    this.showContent = true;
            }
        }
    }

    public performAction(evt) {
        evt.stopPropagation();

        if (['disabled', 'line'].indexOf(this.type) !== -1) {
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
