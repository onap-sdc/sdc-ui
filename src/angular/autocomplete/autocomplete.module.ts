/**
 * Created by rc2122 on 11/16/2017.
 */
import {NgModule} from "@angular/core";
import {SearchWithAutoCompleteComponent} from "./autocomplete.component";
import {CommonModule} from "@angular/common";
import {FilterBarModule} from "../filterbar/filter-bar.module";
import {AutocompletePipe} from "./autocomplete.pipe";
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        SearchWithAutoCompleteComponent,
        AutocompletePipe
    ],
    imports: [
        FilterBarModule,
        CommonModule,
        HttpModule
    ],
    exports: [
        SearchWithAutoCompleteComponent
    ],
})
export class AutoCompleteModule {
}
