import {NgModule} from "@angular/core";
import {TileComponent} from "./tile.component";
import {CommonModule} from "@angular/common";
import {TileContentComponent} from "./childs/tile-content.component";
import {TileFooterComponent} from "./childs/tile-footer.component";
import {TileHeaderComponent} from "./childs/tile-header.component";

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
