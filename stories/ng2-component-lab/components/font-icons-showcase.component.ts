import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

interface IIcon {
    category: string;
    name: string;
}

@Component({
    selector: "font-icons-table",
    template: `
        <div class="font-icons-table">
            <div *ngFor="let iconCategory of fontIconsCategories" class="font-icons-category">
                <h2 class="category-header">{{iconCategory}}</h2>
                <div class="font-icons-container">
                    <div class="font-icon-cell" *ngFor="let iconName of fontIconsMap[iconCategory]">
                        <div class="font-icon-box" (click)="selectFontIcon({category: iconCategory, name: iconName})" [ngClass]="{'selected': iconName === selectedIcon?.name && iconCategory === selectedIcon?.category}">
                            <div class="font-icon-sym" [innerHTML]="getFontIconCode({category: iconCategory, name: iconName})"></div>
                            <div class="font-icon-name">{{iconName}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="font-icon-view">
            <ng-container *ngIf="selectedIcon">
                <div class="font-icon-sym" #selectedIconSymbol [innerHTML]="getFontIconCode(selectedIcon, selectedIconSize)"></div>
                <div class="font-icon-name"><b>{{selectedIcon?.category}}</b>-<i>{{selectedIcon?.name}}</i></div>
                <div class="font-icon-size">
                    Size: <select [(ngModel)]="selectedIconSize">
                        <option *ngFor="let iconSize of iconSizes" [ngValue]="iconSize">{{iconSize}}</option>
                    </select>
                </div>
                <div class="font-icon-code"><input type="text" disabled="true" value="{{selectedIcon ? selectedIconSymbol.innerHTML : ''}}" /></div>
            </ng-container>
            <ng-container *ngIf="!selectedIcon">
                Please select icon to view...
            </ng-container>
        </div>
    `,
    styles: [
        `.font-icons-table {
        }
        .font-icons-category {
            border-bottom: 1px solid #d2d2d2;
            margin-top: 15px;
        }
        .category-header {
            font-size: 24px;
        }
        .font-icons-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: center;
        }
        .font-icon-cell {
            flex-basis: 300px;
        }
        .font-icon-box {
            background: #d2d2d2;
            color: #000;
            margin: 8px;
            padding: 5px;
            font-size: 16px;
            line-height: 2em;
            border-radius: 5px;
            border: 3px solid transparent;
            transition: background 200ms, color 200ms;
        }
        .font-icon-box .font-icon-sym {
            display: inline-block;
            height: 32px;
            min-width: 32px;
            vertical-align: middle;
            text-align: center;
            margin-right: 10px;
        }
        .font-icon-box .font-icon-name {
            display: inline-block;
            text-align: left;
        }
        .font-icon-box:hover,
        .font-icon-box.selected {
            background: #0568ae;
            color: #fff;
        }
        .font-icon-box:hover .font-icon-sym,
        .font-icon-box.selected .font-icon-sym {
            font-size: 2em;
            line-height: 1em;
        }
        .font-icon-box.selected {
            border-color: #ea7400;
        }
        .font-icon-view {
            padding: 20px;
            font-size: 16px;
            text-align: center;
            background: #d2d2d2;
            margin: 20px 50px;
            border: 2px solid #959595;
            min-height: 80px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        .font-icon-view .font-icon-sym {
            flex-basis: 100px;
            flex-grow: 1;
        }
        .font-icon-view .font-icon-name {
            flex-basis: 100px;
            flex-grow: 1;
            flex-shrink: 1;
        }
        .font-icon-view .font-icon-size {
            flex-basis: 150px;
            flex-grow: 1;
            flex-shrink: 1;
        }
        .font-icon-view .font-icon-size select {
            width: 100px;
        }
        .font-icon-view .font-icon-code {
            flex-basis: 250px;
            flex-grow: 1;
            flex-shrink: 1;
        }
        .font-icon-view .font-icon-code input {
            background: inherit;
            border: 1px solid #959595;
        }`
    ]
})
export class FontIconsShowcaseComponent implements OnChanges {
    @Input() public fontIconsMap: {[index: string]: string[]};
    public fontIconsCategories: string[];
    public iconSizes: string[] = ['', 'lg', '2x', '3x', '4x', '5x'];
    public selectedIcon: IIcon;
    public selectedIconSize: string = '';

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.fontIconsMap) {
            this.fontIconsCategories = Object.keys(this.fontIconsMap);
        }
    }

    public selectFontIcon(icon: IIcon) {
        if (this.selectedIcon === icon) {
            this.selectedIcon = undefined;
        }
        this.selectedIcon = icon;
        // this.selectedIconName = this.selectedIconName === iconName ? undefined : iconName;
    }

    public getFontIconCode(icon: IIcon, iconSize: string) {
        return '<i class="i-' + icon.category +
            (iconSize ? ' i-' + icon.category + '-' + iconSize : '') +
            ' i-' + icon.category + '-' + icon.name +
            '"></i>';
    }
}
