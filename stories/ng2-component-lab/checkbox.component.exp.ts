import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Checkbox')
    .case('Normal Checkbox', {
        showSource: true,
        template: `
     <sdc-checkbox label="Checked"></sdc-checkbox>
    `
    }).case('Disabled Checkbox', {
        showSource: true,
        template: `
     <sdc-checkbox label="Disabled"[disabled]="true"></sdc-checkbox>
    `
    });
