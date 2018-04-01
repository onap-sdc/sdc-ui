export default `
<ul class="sdc-tabs-list" role="tablist">
    <li *ngFor="let tab of tabs" class="sdc-tab" role="tab" (click)="selectTab(tab)" [class.sdc-tab-active]="tab.active">
        <span *ngIf="tab.title">{{tab.title}}</span>
        <svg-icon-label
            *ngIf="tab.titleIcon"
            [name]="tab.titleIcon"
            [mode]="tab.titleIconMode"
            [size]="_size">
        </svg-icon-label>
    </li>
</ul>
<ng-content></ng-content>
`;
