import { Component, Input } from "@angular/core";

@Component({
  selector: "sdc-checkbox",
  template: "<input type='checkbox' name='{{name}}'>{{label}}"
})
export class CheckboxComponent {

  @Input() name: string;
  @Input() label: string;

  constructor() { }

}
