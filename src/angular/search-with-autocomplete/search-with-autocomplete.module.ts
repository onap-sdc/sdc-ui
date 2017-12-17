/**
 * Created by rc2122 on 11/16/2017.
 */
import {NgModule} from "@angular/core";
import {SearchWithAutoCompleteComponent} from "./search-with-autocomplete.component";
import {SearchBarModule} from "../searchbar/search-bar.module";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        SearchWithAutoCompleteComponent
    ],
    imports: [SearchBarModule,
        CommonModule],
    exports: [
        SearchWithAutoCompleteComponent
    ],
})
export class SearchWithAutoCompleteModule {
}
