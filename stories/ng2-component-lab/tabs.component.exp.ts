/**
 * Created by rc2122 on 11/28/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Tabs').group('Tabs', [
    {
        id: 'menu-tabs',
        title: 'Menu tabs',
        showSource: true,
        template: `
        <sdc-tabs [type]="'menu'">
            <sdc-tab [active]="true" title="Tab 1">
                hello to everybody!
            </sdc-tab>
            <sdc-tab [active]="false" title="Tab 2">
                how are you today?
            </sdc-tab>
        </sdc-tabs>
    `
    },
    {
        id: 'header-tabs',
        title: 'Header tabs',
        showSource: true,
        template: `
        <sdc-tabs [type]="'header'">
            <sdc-tab [active]="true" title="Tab 1">
                hello to everybody!
            </sdc-tab>
            <sdc-tab [active]="false" title="Tab 2">
                how are you today?
            </sdc-tab>
        </sdc-tabs>
    `
    },
    {
        id: 'disabled-tabs',
        title: 'Disabled tabs',
        showSource: true,
        template: `
        <sdc-tabs [type]="'menu'">
            <sdc-tab [active]="true" title="Tab 1">
                hello to everybody!
            </sdc-tab>
            <sdc-tab [active]="false" [disabled]="true" title="Tab 2">
                how are you today?
            </sdc-tab>
        </sdc-tabs>
    `
    }
]);
