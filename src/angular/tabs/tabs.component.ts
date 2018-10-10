import { Component, Input, Output, AfterContentInit, ContentChildren, QueryList, HostBinding, EventEmitter } from '@angular/core';
import { TabComponent } from './children/tab.component';
import { SvgIconComponent } from "./../../../src/angular/svg-icon/svg-icon.component";
import { Mode, Placement, Size } from './../common/enums';
import template from "./tabs.component.html";

@Component({
    selector: 'sdc-tabs',
    template: template
})

export class TabsComponent implements AfterContentInit {

    @HostBinding('class') classes = 'sdc-tabs sdc-tabs-header';
    @ContentChildren(TabComponent) private tabs: QueryList<TabComponent>;

    @Output() public selectedTab: EventEmitter<any> = new EventEmitter<any>();

    public _size = Size.medium;

    public selectTab(tab: TabComponent) {
      this.selectedTab.emit(tab);
      // deactivate all tabs
      this.tabs.toArray().forEach((_tab: TabComponent) => {
        _tab.active = false;
        _tab.titleIconMode = Mode.secondary;
      });

      // activate the tab the user has clicked on.
      tab.active = true;
      tab.titleIconMode = Mode.primary;
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
