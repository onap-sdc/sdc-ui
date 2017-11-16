import {NgModule} from "@angular/core";
import {TileComponent} from "./tile.component";
import {CommonModule} from "@angular/common";
import {TileHeaderComponent} from "./header/tile-header.component";
import {TileInfoComponent} from "./info/tile-info.component";
import {TileFooterComponent} from "./footer/tile-footer.component";

@NgModule({
    declarations: [
        TileComponent,
        TileHeaderComponent,
        TileInfoComponent,
        TileFooterComponent
    ],
    imports: [CommonModule],
    entryComponents: [TileComponent],
    exports: [
        TileComponent,
        TileHeaderComponent,
        TileInfoComponent,
        TileFooterComponent
    ]
})

export class TileModule {

}

