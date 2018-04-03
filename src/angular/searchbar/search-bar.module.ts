import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./search-bar.component";
import { CommonModule } from "@angular/common";
import { FormElementsModule } from "../form-elements/form-elements.module";

@NgModule({
    declarations: [
        SearchBarComponent
    ],
    imports: [CommonModule,
        FormElementsModule],
    exports: [
        SearchBarComponent
    ],
})
export class SearchBarModule {
}
