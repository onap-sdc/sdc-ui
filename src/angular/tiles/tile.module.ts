import { NgModule } from "@angular/core";
import { TileComponent } from "./tile.component";
import { CommonModule } from "@angular/common";
import { TileContentComponent } from "./children/tile-content.component";
import { TileFooterComponent } from "./children/tile-footer.component";
import { TileHeaderComponent } from "./children/tile-header.component";

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
