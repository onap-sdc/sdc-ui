import { ChecklistModel } from "./Checklist";
import { isUndefined } from "util";

export class ChecklistItemModel {
    public label: string;
    public value: any;
    public disabled: boolean;
    public isChecked: boolean;
    public subLevelChecklist: ChecklistModel;
    constructor(label: string, disabled?: boolean, isChecked?: boolean, subLevelChecklist?: ChecklistModel, value?: any) {
        this.label = label;
        this.disabled = disabled;
        this.isChecked = isChecked;
        this.value = isUndefined(value) ? label : value;
        this.subLevelChecklist = subLevelChecklist;
    }
}
