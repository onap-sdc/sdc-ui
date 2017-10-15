import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe
    ],
    imports: [
        CommonModule,
        FormElementsModule,
        ButtonsModule
    ],
    entryComponents: [],
    exports: [
        ColorsTable,
        FormElementsModule,
        ButtonsModule
    ],
    providers: [KeysPipe]
})

export class ComponentsModule {

    constructor() {
    }
}
