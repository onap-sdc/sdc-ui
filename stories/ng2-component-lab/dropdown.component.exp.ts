/**
 * Created by ob0695 on 10/3/2017.
 */

import {experimentOn} from '@islavi/ng2-component-lab';

const options:string[] = ['First Option', 'Second Option', 'Third Option'];

export default experimentOn('DropDown')
    .group("DropDown",[
      {
        id: 'normalDropDown',
        showSource: true,
        context: {
            options: options,
        },
        title: 'Normal dropDown',
        description: 'Normal dropDown',
        template: `
        <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
        `,
      },
      {
        id: 'disabledDropDown',
        showSource: true,
        context: {
            options: options,
        },
        title: 'Disabled dropDown',
        description: 'Disabled dropDown',
        template: `
        <sdc-dropdown label="Disabled dropDown example" placeHolder="Please choose option" disabled="true" [options]="options"></sdc-dropdown>
        `
    }, 
    {
        id: 'requiredDropDown',
        showSource: true,
        context: {
            options: options,
        },
        title: 'Required dropDown',
        description: 'Required dropDown',
        template: `
        <sdc-dropdown label="Requiered dropDown example" placeHolder="Please choose option" required="true" [options]="options"></sdc-dropdown>
        `
    }
    ]);

