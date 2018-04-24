import { experimentOn } from '@islavi/ng2-component-lab';
import { IDropDownOption, DropDownOptionType, DropDownTypes } from "../../src/angular/form-elements/dropdown/dropdown-models";

const options1: IDropDownOption[] = [
    {
        label: 'First Option Label',
        value: 'firstOptionValue',
    },
    {
        label: 'Second Option Label',
        value: 'secondOptionValue',
    },
    {
        label: 'Third Option Label',
        value: 'thirdOptionValue',
        type: DropDownOptionType.Simple
    }
];

const options2: IDropDownOption[] = [
    {
        label: 'Header Label',
        value: 'headerValue',
        type: DropDownOptionType.Header
    },
    {
        label: 'First Option Label',
        value: 'firstOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Disabled Option Label',
        value: 'headerValue',
        type: DropDownOptionType.Disable
    },
    {
        label: 'Second Option Label',
        value: 'secondOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Ruler Label',
        value: 'rulerValue',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label: 'Third Option Label',
        value: 'thirdOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fourth Option Label',
        value: 'FourthOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fifth Option Label',
        value: 'fifthOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Ruler Label',
        value: 'rulerValue',
        type: DropDownOptionType.HorizontalLine
    },
    {
        label: 'Third Option Label',
        value: 'thirdOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fourth Option Label',
        value: 'FourthOptionValue',
        type: DropDownOptionType.Simple
    },
    {
        label: 'Fifth Option Label',
        value: 'fifthOptionValue',
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
                onChange: function(option) {
                    this.valueSelected = option.value;
                }
            },
            title: 'Normal DropDown',
            description: 'Normal DropDown',
            template: `
            <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options" (changed)="onChange($event)"></sdc-dropdown>
            <div style="margin: 10px 0 30px 0px; font-size:18px">Selected value:<strong style="font-weight: 700">{{valueSelected}}</strong></div>
            `
        }, {
            id: 'groupDropDown',
            showSource: true,
            context: {
                options: options2,
                onChange: function(option) {
                    this.valueSelected = option.value;
                }
            },
            title: 'DropDown with groups',
            description: 'DropDown with groups',
            template: `
            <sdc-dropdown label="Hi I am a label" placeHolder="Please choose option" [options]="options" (changed)="onChange($event)"></sdc-dropdown>
            <div style="margin: 10px 0 30px 0px; font-size:18px">Selected value:<strong style="font-weight: 900">{{valueSelected}}</strong></div>
            `
        },
        {
            id: 'groupDropDownPreSelect',
            showSource: true,
            context: {
                options: options2,
                onChange: function(option) {
                    this.valueSelected = option.value;
                }
            },
            title: 'DropDown with groups and pre-selected value',
            description: 'DropDown with groups and pre-selected value',
            template: `
            <sdc-dropdown label="Hi I am a label"
                            placeHolder="Please choose option"
                            [options]="options"
                            [selectedOption]="{label: 'does not matter', value: 'firstOptionValue'}"
                            (changed)="onChange($event)"></sdc-dropdown>
            <div style="margin: 10px 0 30px 0px; font-size:18px">Selected value:<strong style="font-weight: 900">{{valueSelected}}</strong></div>
            `
        },
        {
            id: 'headlesspDropDown',
            showSource: true,
            context: {
                options: options2,
                dropDownHedlessType: DropDownTypes.Headless,
                onChange: function(option) {
                    this.valueSelected = option.value;
                }
            },
            title: 'Headless and Labeless DropDown',
            description: 'Headless and labeless DropDown',
            template: `
            <button style="margin-bottom: 10px;" SdcDropdownTrigger [dropDown]="dropDown1">Click to toggle!</button>
            <sdc-dropdown #dropDown1 [options]="options" [type]="dropDownHedlessType" (changed)="onChange($event)"></sdc-dropdown>
            <div style="margin: 10px 0 30px 0px; font-size:18px">Selected value:<strong style="font-weight: 900">{{valueSelected}}</strong></div>
            `
        },
        {
            id: 'disabledDropDown',
            showSource: true,
            context: {
                options: options2,
                onChange: function(option) {
                    this.valueSelected = option.value;
                }
            },
            title: 'Disabled DropDown',
            description: 'Disabled DropDown',
            template: `
            <sdc-dropdown   label="Hi I am a label"
                            placeHolder="Please choose option"
                            disabled="true"
                            [options]="options"
                            (changed)="onChange($event)"></sdc-dropdown>
            <div style="margin: 10px 0 30px 0px; font-size:18px">Selected value:<strong style="font-weight: 900">{{valueSelected}}</strong></div>
            `
        },
        {
            id: 'normalAutoDropDown',
            showSource: true,
            context: {
                options: options1,
                dropDownAutoType: DropDownTypes.Auto,
                onChange: function(option) {
                    this.valueSelected = option.value;
                }
            },
            title: 'Normal Auto DropDown',
            description: 'Normal Auto DropDown',
            template: `
            <sdc-dropdown label="Hi I am a label"
                            placeHolder="Please choose option"
                            [type]="dropDownAutoType"
                            [options]="options"
                            (changed)="onChange($event)"></sdc-dropdown>
            <div style="margin: 10px 0 30px 0px; font-size:18px">Selected value:<strong style="font-weight: 900">{{valueSelected}}</strong></div>
            `
        }
    ]);
