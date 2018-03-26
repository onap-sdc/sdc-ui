import {Component} from "@angular/core";
import {Mode, Placement, Size} from "../../../src/angular/common/enums";
import {SvgIconComponent} from "../../../src/angular/svg-icon/svg-icon.component";

@Component({
    selector: "svg-icons-table",
    template: `
        <div class="svg-icons-table">
            <div *ngFor="let iconName of iconsNames" class="svg-icon-cell" [ngClass]="{'selected': selectedIcon === iconName}" (click)="selectIcon(iconName)">
                <svg-icon-label [name]="iconName" [label]="iconName" labelPlacement="right"></svg-icon-label>
            </div>
        </div>
        <div class="icon-showcase">
            <div>
                <svg-icon [name]="selectedIcon" [mode]="defaultIconSettings.mode" [size]="defaultIconSettings.size"></svg-icon>
                Selected icon: <b *ngIf="selectedIcon">{{selectedIcon}}</b><i *ngIf="!selectedIcon">None</i>
            </div>
            <sdc-dropdown label="Mode" [selectedOption]="{'value': mode, 'label': mode}" [options]="modeOptions" (changed)="mode = $event.value"></sdc-dropdown>
            <sdc-dropdown label="Label Placement" [selectedOption]="{'value': labelPlacement, 'label': labelPlacement}" [options]="labelPlacementOptions" [selectedOption]="labelPlacement" (changed)="labelPlacement = $event.value"></sdc-dropdown>
            <sdc-dropdown label="Size" [selectedOption]="{'value': size, 'label': size}" [options]="sizeOptions" [selectedOption]="size" (changed)="size = $event.value"></sdc-dropdown>
            <sdc-checkbox label="Clickable" [checked]="clickable" (checkedChange)="clickable = $event"></sdc-checkbox>
            <sdc-checkbox label="Disabled" [checked]="disabled" (checkedChange)="disabled = $event"></sdc-checkbox>
            <sdc-input label="Label" [(value)]="label"></sdc-input>
            <svg-icon-label [name]="selectedIcon" [mode]="mode" [size]="size" [clickable]="clickable" [disabled]="disabled" [label]="label" [labelPlacement]="labelPlacement"></svg-icon-label>
        </div>
`,
    styles: [`
    .svg-icons-table {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: stretch;
        overflow-y: auto;
    }
    .svg-icons-table .svg-icon-cell {
        border: 1px solid #999;
        padding: 5px;
        margin: 5px;
        width: 250px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .svg-icons-table .svg-icon-cell.selected {
        border-color: #0568ae;
    }
    .icon-showcase {
        margin: 20px 10px;
        padding: 10px;
        border: 1px solid #999;
        background: #eee;
    }

    sdc-dropdown {
        display: inline-block;
        min-width: 160px;
    }

    sdc-dropdown .sdc-dropdown {
    }
`]
})
export class SvgIconsTableComponent {
    public iconsNames: string[];
    public selectedIcon: string;

    public modeOptions;
    public sizeOptions;
    public labelPlacementOptions;

    private mode: Mode;
    private size: Size;
    private labelPlacement: Placement;
    private clickable: boolean;
    private disabled: boolean;
    private label: string;

    private defaultIconSettings: {mode: Mode, size: Size};

    constructor() {
        this.iconsNames = Object.keys(SvgIconComponent.Icons);
        this.mode = null;
        this.size = Size.medium;
        this.labelPlacement = Placement.right;
        this.clickable = false;
        this.disabled = false;
        this.label = '';

        this.defaultIconSettings = { mode: Mode.info, size: Size.small };

        this.modeOptions = [{value: null, label: 'NONE'}].concat(Object.keys(Mode).map((modeKey) => ({
            value: modeKey,
            label: Mode[modeKey]
        })));
        this.sizeOptions = Object.keys(Size).map((sizeKey) => ({
            value: sizeKey,
            label: Size[sizeKey]
        }));
        this.labelPlacementOptions = Object.keys(Placement).map((placementKey) => ({
            value: placementKey,
            label: Placement[placementKey]
        }));
    }

    public selectIcon(iconName) {
        this.selectedIcon = iconName;
    }
}
