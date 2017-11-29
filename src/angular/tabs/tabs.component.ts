import { Component, ContentChildren, QueryList, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
    selector: 'sdc-tabs',
    templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit {
    @Input() public type: string = 'menu'; // gets 'menu' | 'header'
    @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
    @Output() public tabChanged: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

    public ngAfterContentInit() {
        // after contentChildren are set, determine active tab. If no active tab set, activate the first one
        const activeTabs = this.tabs.filter((tab) => tab.active);

        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    private selectTab(tab: TabComponent) {
        // activate the tab the user clicked.
        this.tabs.toArray().forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
        this.tabChanged.emit(tab);
    }

    private triggerTabChange(tabTitle) {
        this.tabs.toArray().forEach((tab: TabComponent) => {
            tab.active = (tab.title === tabTitle) ? true : false;
        });
    }
}
