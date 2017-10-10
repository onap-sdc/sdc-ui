/**
 * Created by ob0695 on 10/3/2017.
 */

import {experimentOn} from '@islavi/ng2-component-lab';

const options:string[] = ['First Option', 'Second Option', 'Third Option'];

export default experimentOn('DropDown')
    .case('Normal DropDown', {
        context: {
            options: options,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
    `
    }).case('Disabled DropDown', {
        context: {
            options: options,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Disabled dropDown example" placeHolder="Please choose option" disabled="true" [options]="options"></sdc-dropdown>
    `
    }).case('Requiered DropDown', {
        context: {
            options: options,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Requiered dropDown example" placeHolder="Please choose option" required="true" [options]="options"></sdc-dropdown>
    `
    });

