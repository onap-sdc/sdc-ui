import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LoaderComponent
    ],
})

export class LoaderModule {}
