import { experimentOn } from '@islavi/ng2-component-lab';
import { IDropDownOption, DropDownOptionType, DropDownTypes } from "../../src/angular/form-elements/dropdown/dropdown-models";

const options1: IDropDownOption[] = [
    {
        label: 'First Option',
        value: 'First Option',
    },
    {
        label: 'Second Option',
        value: 'Second Option',
    },
    {
        label: 'Third Option',
        value: 'Third Option',
        type: DropDownOptionType.Simple
    }
];

const options2: IDropDownOption[] = [
    {
        label: 'Header',
        value: 'header',
        type: DropDownOptionType.Header
    },
    {
        label: 'First Option',
        value: 'firstOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Disabled Option',
        value: 'header',
        type: DropDownOptionType.Disable
    },
    {
        label: 'Second Option',
        value: 'secondOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Ruler',
        value: 'ruler',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label: 'Third Option',
        value: 'thirdOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fourth Option',
        value: 'FourthOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fifth Option',
        value: 'fifthOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Ruler',
        value: 'ruler',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label: 'Third Option',
        value: 'thirdOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fourth Option',
        value: 'FourthOption',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fifth Option',
        value: 'fifthOption',
        type: DropDownOptionType.Simple
    }
];

export default experimentOn('DropDown')
    .group("DropDown", [
        {
            id: 'normalDropDown',
            showSource: true,
            context: {
                options: options1,
                selectedOption: null,
                onChange: function(value){
                    console.log("Something was changed!", value);
                    this.selectedOption = value;
                }
            },
            title: 'Normal DropDown',
            description: 'Normal DropDown',
            template: `
      <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options" (changed)="onChange($event)"></sdc-dropdown>
      <div style="margin: 10px 0 30px 0px; font-size:18px">Selected option:<strong style="font-weight: 900"> {{selectedOption}}</strong></div>
    `
        }, {
            id: 'groupDropDown',
            showSource: true,
            context: {
                options: options2,
            },
            title: 'DropDown with groups',
            description: 'DropDown with groups',
            template: `
      <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options"></sdc-dropdown>
    `
        },
        {
            id: 'groupDropDownPreSelect',
            showSource: true,
            context: {
                options: options2,
            },
            title: 'DropDown with groups and pre-selected value',
            description: 'DropDown with groups and pre-selected value',
            template: `
      <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options" [selectedOption]="options[1]"></sdc-dropdown>
    `
        },
        {
            id: 'headlesspDropDown',
            showSource: true,
            context: {
                options: options2,
            },
            title: 'Headless and Labeless DropDown',
            description: 'Headless and labeless DropDown',
            template: `
            <div style="margin-bottom: 10px;">
                <button dropdown-trigger [dropDown]="dropDown1">Click to toggle!</button><span> Selected value: {{ dropDown1.selectedOption?.value }}</span>
            </div>
            <sdc-dropdown [options]="options" #dropDown1></sdc-dropdown>`
        },
        {
            id: 'disabledDropDown',
            showSource: true,
            context: {
                options: options2,
            },
            title: 'Disabled DropDown',
            description: 'Disabled DropDown',
            template: `
            <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" disabled="true" [options]="options"></sdc-dropdown>`
        },
        {
            id: 'normalAutoDropDown',
            showSource: true,
            context: {
                options: options1,
                selectedOption:null,
                onChange: function(option){
                    console.log("Something was changed!", option.value);
                    this.selectedOption = option.value;
                },
                dropDownType:DropDownTypes.Auto
            },
            title: 'Normal Auto DropDown',
            description: 'Normal Auto DropDown',
            template: `
      <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" [type]="dropDownType" [options]="options" (changed)="onChange($event)"></sdc-dropdown>
      <div style="margin: 10px 0 30px 0px; font-size:18px">Selected option:<strong style="font-weight: 900"> {{selectedOption}}</strong></div>
    `
        }
    ]);
