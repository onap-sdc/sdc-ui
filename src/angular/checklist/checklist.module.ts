import { NgModule } from "@angular/core";
import { ChecklistComponent } from "./checklist.component";
import { CommonModule } from "@angular/common";
import { FormElementsModule } from "../form-elements/form-elements.module";

@NgModule({
    declarations: [ChecklistComponent],
    exports: [ChecklistComponent],
    imports: [CommonModule, FormElementsModule]
})
export class ChecklistModule {}
