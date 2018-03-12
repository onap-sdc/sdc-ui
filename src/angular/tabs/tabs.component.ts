import { Component, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './children/tab.component';
import template from "./tabs.component.html";

@Component({
    selector: 'sdc-tabs',
    template,
    host: {'class': 'sdc-tabs sdc-tabs-header'}
})

export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) private tabs: QueryList<TabComponent>;

    public selectTab(tab: TabComponent) {
      // deactivate all tabs
      this.tabs.toArray().forEach((item) => item.active = false);

      // activate the tab the user has clicked on.
      tab.active = true;
    }

    public ngAfterContentInit() {
        // get all active tabs
        const activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

  }
