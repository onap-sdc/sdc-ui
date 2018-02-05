export default `
<ul class="sdc-tabs-list" role="tablist">
    <li *ngFor="let tab of tabs" class="sdc-tab" role="tab" (click)="selectTab(tab)" [class.sdc-tab-active]="tab.active">
        {{tab.title}}
    </li>
</ul>
<ng-content></ng-content>
`;
