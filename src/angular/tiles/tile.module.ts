import {NgModule} from "@angular/core";
import {TileComponent} from "./tile.component";
import {CommonModule} from "@angular/common";
import {TileContentComponent} from "./content/tile-content.component";
import {TileFooterComponent} from "./footer/tile-footer.component";
import {TileHeaderComponent} from "./header/tile-header.component";

@NgModule({
    declarations: [
        TileComponent,
        TileContentComponent,
        TileFooterComponent,
        TileHeaderComponent
    ],
    imports: [CommonModule],
    entryComponents: [TileComponent],
    exports: [
        TileComponent,
        TileContentComponent,
        TileFooterComponent,
        TileHeaderComponent
    ]
})

export class TileModule {

}

