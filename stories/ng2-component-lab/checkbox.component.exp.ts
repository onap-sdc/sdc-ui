import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Checkbox')
    .group("Checkbox",[
      {
        id: 'checkbox',
        showSource: true,
        title: 'Regular Checkbox',
        description: 'Simple checkbox',
        template: `<sdc-checkbox label="Simple"></sdc-checkbox>`,
      },
      {
        id: 'checkboxChecked',
        showSource: true,
        title: 'Regular Checked Checkbox',
        description: 'Simple checked checkbox',
        template: `<sdc-checkbox label="Checked" [checked]="true" [testId]="'checkedCheckboxID'"></sdc-checkbox>`,
      },
      {
        id: 'disabledCheckbox',
        showSource: true,
        title: 'Disabled checkbox',
        description: 'Simple disabled checkbox',
        template: `<sdc-checkbox label="Disabled" [disabled]="true"></sdc-checkbox>`,
      },
      {
        id: 'disabledCheckboxChecked',
        showSource: true,
        title: 'Disabled checked checkbox',
        description: 'Simple disabled checked checkbox',
        template: `<sdc-checkbox label="Disabled" [checked]="true" [disabled]="true"></sdc-checkbox>`,
      }
    ]);
