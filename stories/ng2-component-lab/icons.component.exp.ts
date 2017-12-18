import {experimentOn} from '@islavi/ng2-component-lab';
const experiment = experimentOn('Icons');

experiment.group("icon", [
    {
        id: 'Icon',
        showSource: true,
        title: 'Icon',
        description: 'Simple Icon',
        template: `
        <sdc-icon iconName="save-o" label="test label" [labelPosition]="left"></sdc-icon>
        `
    }
    ]);

export default experiment;
