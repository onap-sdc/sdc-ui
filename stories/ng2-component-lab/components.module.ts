import {NgModule} from "@angular/core";
import {ButtonComponent} from "./../../src/angular2/button.component";
import {CheckboxComponent} from "./../../src/angular2/checkbox.component";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";

@NgModule({
    declarations: [
        ButtonComponent,
        CheckboxComponent,
        ColorsTable,
        KeysPipe
    ],
    imports: [
        CommonModule
    ],
    entryComponents: [],
    exports: [
        ButtonComponent,
        CheckboxComponent,
        ColorsTable
    ],
    providers: [KeysPipe]
})
export class ComponentsModule {

}
