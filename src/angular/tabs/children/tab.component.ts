import { Component, Input } from '@angular/core';
import { Mode } from './../../common/enums';
import template from "./tab.component.html";

@Component({
  selector: 'sdc-tab',
  template: template
})
export class TabComponent {
  @Input() public title: string;
  @Input() public titleIcon: string;
  @Input() public active = false;

  public titleIconMode = Mode.secondary;

}
