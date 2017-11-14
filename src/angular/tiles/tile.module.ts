import {NgModule} from "@angular/core";
import {TileComponent} from "./tile.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        TileComponent
    ],
    imports: [CommonModule],
    entryComponents: [TileComponent],
    exports: [
        TileComponent
    ]
})

export class TileModule {

}

