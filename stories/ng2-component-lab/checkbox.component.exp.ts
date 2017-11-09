import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Checkbox')
    .case('Normal Checkbox', {
        template: `
     <sdc-checkbox label="Checked"></sdc-checkbox>
    `
    }).case('Disabled Checkbox', {
        template: `
     <sdc-checkbox label="Checked" [disabled]="true"></sdc-checkbox>
    `
    });
