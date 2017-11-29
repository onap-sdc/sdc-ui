/**
 * Created by rc2122 on 11/28/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('tabs')
    .case('Menu tabs', {
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
    }).case('Header tabs', {
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
    }).case('Disabled tabs', {
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
    });
