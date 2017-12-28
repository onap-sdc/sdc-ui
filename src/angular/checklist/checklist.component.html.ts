export default `
<div *ngFor="let checkbox of checklistModel.checkboxes" #currentCheckbox>
    <div class="checkbox-item">
        <sdc-checkbox [label]="checkbox.label"
                      [(checked)]="checkbox.isChecked"
                      [disabled]="checkbox.disabled"
                      (checkedChange)="checkboxCheckedChange(checkbox, checklistModel)"
                      [ngClass]="{'semi-checked': !checkbox.isChecked && hasCheckedChild(currentCheckbox)}"></sdc-checkbox>
    </div>
    <div *ngIf="checkbox.subLevelChecklist" class="checkbox-sublist">
        <sdc-checklist [checklistModel]="checkbox.subLevelChecklist"
                   (checkedChange)="childCheckboxChange($event, checkbox)"></sdc-checklist>
    </div>
</div>
`;
