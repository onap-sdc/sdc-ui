import { Component, Input, Output, ContentChildren, SimpleChanges, QueryList, EventEmitter, OnChanges, AfterContentInit } from '@angular/core';
import { PopupMenuItemComponent } from "./popup-menu-item.component";

export interface IPoint {
    x: number;
    y: number;
}

@Component({
    selector: 'popup-menu-list',
    template:
    `<ul
        class="sdc-menu-list"
        *ngIf="open"
        [ngClass]="[className || '', relative? 'relative': '']"
        [ngStyle]="{'left': position.x + 'px', 'top': position.y + 'px'}"
        (click)="$event.stopPropagation()">
        <ng-content></ng-content>
    </ul>`
})
export class PopupMenuListComponent implements AfterContentInit {
    @Input()
    public get open(): boolean {
        return this._open;
    }
    public set open(isOpen: boolean) {
        isOpen = isOpen !== undefined ? isOpen : false;
        if (this._open !== isOpen) {
            this._open = isOpen;
            this.openChange.emit(this._open);
        }
    }
    @Input()
    public get position(): IPoint {
        return this._position;
    }
    public set position(position: IPoint) {
        position = position !== undefined ? position : {x: 0, y: 0};
        if (this._position.x !== position.x || this._position.y !== position.y) {
            this._position = position;
            this.positionChange.emit(this._position);
        }
    }
    @Input() public className: string;
    @Input() public relative: boolean = false;
    @Output() public openChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public positionChange: EventEmitter<IPoint> = new EventEmitter<IPoint>();

    @ContentChildren(PopupMenuItemComponent) private menuItems: QueryList<PopupMenuItemComponent>;

    private _open: boolean = false;
    private _position: IPoint = {x: 0, y: 0};

    public ngAfterContentInit() {
        this._updateMenuItemsList(this.menuItems);
        this.menuItems.changes.subscribe(this._updateMenuItemsList);
    }

    private _updateMenuItemsList(menuItemsList: QueryList<PopupMenuItemComponent>) {
        menuItemsList.forEach((c, idx) => {
            c.parentMenu = this;
            c.index = idx;
        });
    }
}
