import {experimentOn} from '@islavi/ng2-component-lab';
const experiment = experimentOn('Icons');
// import {Postitions} from '../../src/angular/icons/icons.component';

let position1 = 'top';
let color1 = 'positive';
let label1 = 'test label'
let icon1 = 'save-o';

experiment.group("icon", [
    {
        id: 'Icon',
        showSource: true,
        title: 'Icon',
        description: 'Simple Icon',
        context: {
            position:position1,
            color: color1,
            label: label1,
            icon : icon1
        },
        template: `
        <sdc-icon-settings [label]="label" [position]="position" [color]="color" [selectedIcon]="icon"  #settings>
            <sdc-icon [iconName]="settings.selectedIcon" [label]="settings.label" [labelPosition]="settings.position" [color] = "settings.color" [disabled]="settings.disabled" ></sdc-icon>
        </sdc-icon-settings>
        `
    }
    ]);

export default experiment;
