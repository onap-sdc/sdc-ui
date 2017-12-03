/**
 * Created by ob0695 on 10/3/2017.
 */

import {experimentOn} from '@islavi/ng2-component-lab';
import {
    IDropDownOption,
    DropDownOptionType
} from "../../src/angular/form-elements/dropdown/dropdown-models";

const options1:IDropDownOption[] = [
    {
        label:'First Option'
    },
    {
        label:'Second Option'
    },
    {
        label:'Third Option'
    }
];

const options2:IDropDownOption[] = [
    {
        label:'Header',
        type: DropDownOptionType.Header
    },
    {
        label:'First Option',
        value:'firstOption'
    },
    {
        label:'Disabled Option',
        type: DropDownOptionType.Disable
    },
    {
        label:'Second Option',
        value: 'secondOption'
    },
    {
        label:'Ruler',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label:'Third Option',
        value:'thirdOption'
    },
    {
        label:'Forth Option',
        value:'forthOption'
    },
    {
        label:'Fifth Option',
        value:'fifthOption'
    }
];

export default experimentOn('DropDown')
    .case('Normal DropDown', {
        context: {
            options: options1,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
    `
    })
    .case('Group items DropDown', {
        context: {
            options: options2,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
    `
    })
    .case('Group items pre-selected value DropDown', {
        context: {
            options: options2,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="DropDown example" placeHolder="Please choose option" [options]="options" [value]="'firstOption'"></sdc-dropdown>
    `
    })
    .case('Headless and labeless DropDown', {
        context: {
            options: options2,
        },
        showSource: true,
        template: `
        <div style="margin-bottom: 10px;">
            <button dropdown-trigger [dropDown]="dropDown1">Click to toggle!</button><span> Selected value: {{ dropDown1.value }}</span>
        </div>
        <sdc-dropdown [options]="options" #dropDown1></sdc-dropdown>
        `
    })
    .case('Disabled DropDown', {
        context: {
            options: options2,
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Disabled dropDown example" placeHolder="Please choose option" disabled="true" [options]="options"></sdc-dropdown>
    `
    })
    .case('Requiered DropDown', {
        context: {
            options: options2,
            validateState: false
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Requiered dropDown example" placeHolder="Please choose option" required="true" [options]="options" [validate]="validateState"  #dropDown2></sdc-dropdown>
      <div style="margin-top: 10px;">
        <button (click)="dropDown2.validateDropDown(); validateState = true">Validate!</button> <span>Is valid: {{ dropDown2.isValid() }}</span>
      </div>`
    })
    .case('Requiered DropDown', {
        context: {
            options: options2,
            validateState: false
        },
        showSource: true,
        template: `
      <sdc-dropdown label="Requiered dropDown example" placeHolder="Please choose option" required="true" [options]="options" [validate]="validateState"  #dropDown></sdc-dropdown>
      <div style="margin-top: 10px;">
        <button (click)="dropDown.validateDropDown(); validateState = true">Validate!</button> <span>Is valid: {{ dropDown.isValid() }}</span>
      </div>`
    });;

