import { ChecklistItemModel } from "./ChecklistItem";

export class ChecklistModel {
    public selectedValues: any[];
    public checkboxes: ChecklistItemModel[];
    constructor(selectedValues: any[], checkboxes: ChecklistItemModel[]) {
        this.selectedValues = selectedValues || [];
        this.checkboxes = checkboxes;
        // align the selected values list and checkboxes isChecked param
        this.checkboxes.forEach((checkbox: ChecklistItemModel) => {
            if (this.selectedValues.indexOf(checkbox.value) > -1) {
                checkbox.isChecked = true;
            }else if (checkbox.isChecked) {
                this.selectedValues.push(checkbox.value);
            }
        });
    }
}
