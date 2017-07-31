import { experimentOn } from '@islavi/ng2-component-lab';
import { CheckboxComponent } from "./../../src/angular/checkbox.component";

export default experimentOn('Checkbox')
  .case('Normal Checkbox', {
    template: `
      <sdc-checkbox name="myCheckBox" label="This is checkbox label"></sdc-checkbox>
    `
  });
