import {NgModule} from "@angular/core";
import {TileComponent} from "./tile.component";
import {CommonModule} from "@angular/common";
import {TileInfoComponent} from "./info/tile-info.component";
import {TileFooterComponent} from "./footer/tile-footer.component";
import {TileHeaderComponent} from "./header/tile-header.component";

@NgModule({
    declarations: [
        TileComponent,
        TileInfoComponent,
        TileFooterComponent,
        TileHeaderComponent
    ],
    imports: [CommonModule],
    entryComponents: [TileComponent],
    exports: [
        TileComponent,
        TileInfoComponent,
        TileFooterComponent,
        TileHeaderComponent
    ]
})

export class TileModule {

}

