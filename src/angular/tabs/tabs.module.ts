import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [TabsComponent, TabComponent],
    bootstrap: [],
    exports: [TabsComponent, TabComponent]
})
export class TabModule { }

