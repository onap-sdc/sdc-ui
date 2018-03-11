import { Component, Input } from '@angular/core';
import template from "./tab.component.html";

@Component({
  selector: 'sdc-tab',
  template
})
export class TabComponent {
  @Input() public title: string;
  @Input() public active = false;
}
