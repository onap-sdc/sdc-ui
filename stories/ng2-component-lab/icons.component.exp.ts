import {experimentOn} from '@islavi/ng2-component-lab';
const experiment = experimentOn('Icons');
import {Positions} from '../../src/angular/icons/icons.component';
import {Colors} from '../../src/angular/icons/icons.component';

let label1 = 'test label'
let icon1 = 'check';

experiment.group("icon", [
    {
        id: 'Icon',
        showSource: true,
        title: 'Icon',
        description: 'Simple Icon',
        context: {
            position:Positions.Left,
            color: Colors.Positive,
            label: label1,
            icon : icon1,
        },
        template: `
        <sdc-icon-settings [label]="label" [position]="position" [color]="color" [selectedIcon]="icon"  #settings>
            <sdc-icon [iconName]="settings.selectedIcon" [label]="settings.label" [labelPosition]="settings.position" [color] = "settings.color" [disabled]="settings.disabled" ></sdc-icon>
        </sdc-icon-settings>
        `
    }
    ]);

export default experiment;
