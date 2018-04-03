import { NgModule } from "@angular/core";
import { FilterBarComponent } from "./filter-bar.component";
import { CommonModule } from "@angular/common";
import { FormElementsModule } from "../form-elements/form-elements.module";

@NgModule({
    declarations: [
        FilterBarComponent
    ],
    imports: [CommonModule,
        FormElementsModule],
    exports: [
        FilterBarComponent
    ],
})
export class FilterBarModule {
}
