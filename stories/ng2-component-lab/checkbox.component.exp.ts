import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Checkbox')
    .case('Normal Checkbox', {
        showSource: true,
        template: `
     <sdc-checkbox label="Checked" [value]="{
        name:'Test value',
        state:false
     }" ></sdc-checkbox>
    `
    }).case('Disabled Checkbox', {
        showSource: true,
        template: `
     <sdc-checkbox label="Checked"  [value]="{
        name:'Test value',
        state:false
     }" [disabled]="true"></sdc-checkbox>
    `
    });
