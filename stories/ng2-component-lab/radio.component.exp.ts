import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Radios')
    .case('Radio Buttons Group (two ways binding)', {
        showSource: true,
        context: {
            selectedValue: "val2"
        },
        template: `
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
    })
    .case('Radio Buttons Group Disabled', {
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
    }).case('Radio Buttons Group partialy disabled', {
        showSource: true,
        context: {
            selectedValue: "val1"
        },
        template: `
        <sdc-radio-group
            [legend]="'Radio Buttons Group Disabled legend'"
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
    }).case('Radio Buttons Group Vertical', {
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
    }).case('Radio Buttons Group get value', {
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
    }).case('Radio Buttons Group select value', {
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
    });
