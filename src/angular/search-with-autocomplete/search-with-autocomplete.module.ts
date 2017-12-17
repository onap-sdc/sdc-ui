/**
 * Created by rc2122 on 11/16/2017.
 */
import {NgModule} from "@angular/core";
import {SearchWithAutoCompleteComponent} from "./search-with-autocomplete.component";
import {CommonModule} from "@angular/common";
import {FilterBarModule} from "../filterbar/filter-bar.module";

@NgModule({
    declarations: [
        SearchWithAutoCompleteComponent
    ],
    imports: [FilterBarModule,
        CommonModule],
    exports: [
        SearchWithAutoCompleteComponent
    ],
})
export class SearchWithAutoCompleteModule {
}
