import {NgModule} from "@angular/core";
import {TileComponent} from "./tile.component";
import {CommonModule} from "@angular/common";
import {TileInfoComponent} from "./info/tile-info.component";
import {TileFooterComponent} from "./footer/tile-footer.component";
import {TileInfoLineComponent} from "./info/info-line/tile-info-line.component";
import {TileFooterCellComponent} from "./footer/tile-footer-cell/tile-footer-cell.component";

@NgModule({
    declarations: [
        TileComponent,
        TileInfoLineComponent,
        TileInfoComponent,
        TileFooterComponent,
        TileFooterCellComponent
    ],
    imports: [CommonModule],
    entryComponents: [TileComponent],
    exports: [
        TileComponent,
        TileInfoLineComponent,
        TileInfoComponent,
        TileFooterComponent,
        TileFooterCellComponent
    ]
})

export class TileModule {

}

