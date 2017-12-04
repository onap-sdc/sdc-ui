import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Checkbox')
    .group("Checkbox",[
      {
        id: 'checkbox',
        showSource: true,
        title: 'Checkbox',
        description: 'Simple checkbox',
        template: `<sdc-checkbox label="Checked"></sdc-checkbox>`,
      },
      {
        id: 'disabledCheckbox',
        showSource: true,
        title: 'Disabled checkbox',
        description: 'Simple disabled checkbox',
        template: `<sdc-checkbox label="Disabled"[disabled]="true"></sdc-checkbox>`,
      }
    ]);
