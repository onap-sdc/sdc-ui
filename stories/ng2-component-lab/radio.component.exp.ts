import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Radios')
    .group("Radios",[
      {
        id: 'radioButtonsGroupTwoWaysBinding',
        showSource: true,
        context: {
            selectedValue: "val2"
        },
        title: 'Radio buttons group (two ways binding)',
        description: 'Radio buttons group (two ways binding)',
        template:
        `
        <sdc-radio-group
            [legend]="'Radio Buttons Group legend'"
            [(value)]="selectedValue"
            [options] = "{
                items: [
                    {
                        value: 'val1',
                        name: 'radio5',
                        label: 'Label of Radio 1'
                    },
                    {
                        value: 'val2',
                        name: 'radio5',
                        label: 'Label of Radio 2'
                    }
                ]}"
            ></sdc-radio-group>
        <br><div>Selected Radio: {{selectedValue}}</div>
        `
    },
    {
        id: 'radioButtonsGroupDisabled',
        title: 'Radio buttons group disabled',
        description: 'Radio buttons group disabled',
        showSource: true,
        context: {
            selectedValue: "val1"
        },
        template: `
        <sdc-radio-group
            [legend]="'Radio Buttons Group Disabled legend'"
            [disabled]="true"
            [value]="selectedValue"
            [options] = "{
            items: [{
                value: 'val1',
                name: 'radio6',
                label: 'Label of Radio 1'
            }, {
                value: 'val2',
                name: 'radio6',
                label: 'Label of Radio 2'
            }]
        }"></sdc-radio-group>
        <br><div>Selected Radio: {{selectedValue}}</div>
        `
    },
    {
        id: 'radioButtonsGroupPartiallyDisabled',
        title: 'Radio buttons group partially disabled',
        description: 'Radio buttons group partially disabled',
        showSource: true,
        context: {
            selectedValue: "val2"
        },
        template: `
        <sdc-radio-group
            [legend]="'Radio Buttons Group partially disabled'"
            [(value)]="selectedValue"
            [options] = "{
            items: [{
                value: 'val1',
                name: 'radio7',
                label: 'Label of Radio 1'
            }, {
                value: 'val2',
                disabled: 'true',
                name: 'radio7',
                label: 'Label of Radio 2'
            }, {
                value: 'val3',
                name: 'radio7',
                label: 'Label of Radio 3'
            }]
        }"></sdc-radio-group>
        <br><div>Selected Radio: {{selectedValue}}</div>
        `
    },
    {
        id: 'radioButtonsGroupVertical',
        title: 'Radio buttons group vertical',
        description: 'Radio buttons group vertical',
        showSource: true,
        context: {
            selectedValue: "val1"
        },
        template: `
        <sdc-radio-group
            [legend]="'Radio Buttons Group Vertical legend'"
            [(value)]="selectedValue"
            [direction]="'horizontal'"
            [options]="{
            items: [{
                value:'val1',
                name: 'radio8',
                label: 'Label of Radio1'
            }, {
                value:'val2',
                name: 'radio8',
                label: 'Label of Radio2'
            }]
        }"></sdc-radio-group>
        <br><div>Selected Radio: {{selectedValue}}</div>
        `
    },
    {
        id: 'radioButtonsGroupGetValue',
        title: 'Radio buttons group get value',
        description: 'Radio buttons group get value',
        showSource: true,
        context: {
            selectedValue: "val1",
            getSelectedValue: (val)=>{
                alert(val);
            }
        },
        template: `
        <sdc-radio-group
            #myRadioGroup
            [legend]="'Radio Buttons Group Vertical legend'"
            [(value)]="selectedValue"
            [options]="{
            items: [{
                value:'val1',
                name: 'radio8',
                label: 'Label of Radio1'
            }, {
                value:'val2',
                name: 'radio8',
                label: 'Label of Radio2'
            }]
        }"></sdc-radio-group>
        <br><div>Selected Radio: {{selectedValue}}</div>
        <br><button (click)="getSelectedValue(myRadioGroup.value)">Get selected value</button>
        `
    },
    {
        id: 'radioButtonsGroupSelectValue',
        title: 'Radio buttons group select value',
        description: 'Radio buttons group select value',
        showSource: true,
        context: {
            selectedValue: "val1"
        },
        template: `
        <sdc-radio-group
            #myRadioGroup
            [legend]="'Radio Buttons Group Vertical legend'"
            [(value)]="selectedValue"
            [options]="{
            items: [{
                value:'val1',
                name: 'radio8',
                label: 'Label of Radio1'
            }, {
                value:'val2',
                name: 'radio8',
                label: 'Label of Radio2'
            }]
        }"></sdc-radio-group>
        <br><div>Selected Radio: {{selectedValue}}</div>
        <br><button (click)="myRadioGroup.value='val2'">Set value to val2</button>
        `
    }
    ]);
