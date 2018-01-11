export default `
<div class="sdc-tabs sdc-tabs-{{type}}">
    <ul class="sdc-tabs-list" role="tablist">
        <li  class="sdc-tab" role="tab" *ngFor="let tab of tabs" (click)="!tab.disabled && selectTab(tab)" [class.sdc-tab-active]="tab.active" [attr.disabled]="tab.disabled ? 'disabled' : null">
            {{tab.title}}
        </li>
    </ul>
    <div>
        <ng-content></ng-content>
    </div>
</div>
`;
