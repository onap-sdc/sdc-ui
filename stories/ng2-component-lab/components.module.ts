import {NgModule, Injector} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {ColorsTable} from "./components/colors-table.component";
import {FontIconsShowcaseComponent} from "./components/font-icons-showcase.component";
import {FormElementsModule} from "../../src/angular/form-elements/form-elements.module";
import {ButtonsModule} from "../../src/angular/buttons/buttons.module";

@NgModule({
    declarations: [
        ColorsTable,
        KeysPipe,
        FontIconsShowcaseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FormElementsModule,
        ButtonsModule
    ],
    entryComponents: [],
    exports: [
        ColorsTable,
        FontIconsShowcaseComponent,
        FormElementsModule,
        ButtonsModule
    ],
    providers: [KeysPipe]
})

export class ComponentsModule {

    constructor() {
    }
}
