/**
 * Created by ob0695 on 10/3/2017.
 */

import {experimentOn} from '@islavi/ng2-component-lab';
import {IDropDownGroup} from "../../src/angular/form-elements/dropdown/dropdown-models";

const options:string[] = ['First Option', 'Second Option', 'Third Option'];

const optionGroups: IDropDownGroup[] = [
    {
        title: 'Group1 title',
        items:[
            {
                label: 'Item 1',
                value: 'value1'
            },
            {
                label: 'Item 2',
                value: 'value2'
            },
            {
                label: 'Item 3',
                value: 'value3'
            }
        ]
    },
    {
        title: 'Group2 title',
        items:[
            {
                label: 'Item 1',
                value: 'value1'
            },
            {
                label: 'Item 2',
                value: 'value2'
            },
            {
                label: 'Item 3',
                value: 'value3'
            }
        ]
    },
    {
        title: 'Group3 title',
        items:[
            {
                label: 'Item 1',
                value: 'value1'
            },
            {
                label: 'Item 2',
                value: 'value2'
            },
            {
                label: 'Item 3',
                value: 'value3'
            }
        ]
    }
]

export default experimentOn('DropDown')
    .case('Normal DropDown', {
        context: {
            options: options,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
    `
    }).case('Group items DropDown', {
        context: {
            options: optionGroups,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
    `
    }).case('Group items pre-selected value DropDown', {
        context: {
            options: optionGroups,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options" [value]="'value1'"></sdc-dropdown>
    `
    }).case('Disabled DropDown', {
        context: {
            options: options,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Disabled dropDown example" placeHolder="Please choose option" disabled="true" [options]="options"></sdc-dropdown>
    `
    }).case('Headless and labeless DropDown', {
        context: {
            options: options,
        },
        showSource: true,
        template: `
        <div style="margin-bottom: 10px;">
            <button dropdown-trigger [dropDown]="dropDown">Click to toggle!</button><span> Selected value: {{ dropDown.value }}</span>
        </div>
        <sdc-dropdown placeHolder="Please choose option" [headless]="true" [options]="options" #dropDown></sdc-dropdown>
    `
    }).case('Requiered DropDown', {
        context: {
            options: options,
            validateState: false
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Requiered dropDown example" placeHolder="Please choose option" required="true" [options]="options" [validate]="validateState"  #dropDown></sdc-dropdown>
      <div style="margin-top: 10px;">
        <button (click)="dropDown.validateDropDown(); validateState = true">Validate!</button> <span>Is valid: {{ dropDown.isValid() }}</span>
      </div>
      
    `
    });

