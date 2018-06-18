import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader.component";
import { CommonModule } from "@angular/common";
import { LoaderService } from "./loader.service";

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
    providers: [
        LoaderService
    ]
})

export class LoaderModule {}
