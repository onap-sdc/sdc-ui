import {NgModule, Injector} from "@angular/core";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {FormElementsModule} from "../../src/angular2/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular2/buttons/buttons.module";

export let AppInjector: Injector;

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
