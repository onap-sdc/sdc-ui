import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Tabs').group('Tabs', [
    {
        id: 'tabs',
        title: 'Tabs',
        description: "Sample of tabs",
        showSource: true,
        template: `
        <sdc-tabs>
            <sdc-tab title="tab1">This is tab 1</sdc-tab>
            <sdc-tab title="tab2">This is tab 2</sdc-tab>
        </sdc-tabs>
    `
    }
]);
