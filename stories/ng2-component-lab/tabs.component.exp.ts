import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Tabs').group('Tabs', [
    {
        id: 'simpleTabs',
        title: 'Simple tabs with text title',
        description: "Simple tabs with text title",
        showSource: true,
        context: {
            onSelectTab: (tab) => {
                console.log(`Tab '${tab.title}' selected.`);
            }
        },
        template: `
        <sdc-tabs (selectedTab)="onSelectTab($event)">
            <sdc-tab title="tab1">This is tab 1</sdc-tab>
            <sdc-tab title="tab2">This is tab 2</sdc-tab>
        </sdc-tabs>
    `
    },
    {
        id: 'simpleTabsWithIcons',
        title: 'Simple tabs with icon title',
        description: "Simple tabs with icon title",
        showSource: true,
        context: {
            onSelectTab: (tab) => {
                console.log(`Tab '${tab.titleIcon}' selected.`);
            }
        },
        template: `
        <sdc-tabs (selectedTab)="onSelectTab($event)">
            <sdc-tab titleIcon="inputs-o">This is tab 1</sdc-tab>
            <sdc-tab titleIcon="edit-file-o">This is tab 2</sdc-tab>
        </sdc-tabs>
    `
    }
]);
