 import { NgModule } from "@angular/core";
import { ButtonComponent } from "./../../src/angular2/button.component";
import { CheckboxComponent } from "./../../src/angular2/checkbox.component";

@NgModule({
    declarations: [
      ButtonComponent,
      CheckboxComponent
    ],
    imports: [

    ],
    entryComponents: [],
    exports: [
      ButtonComponent,
      CheckboxComponent
    ],
    providers: []
})
export class ComponentsModule {

}
