import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Radios')
    .case('Checked', {
        showSource: true,
        template: `<sdc-radio [option] = "{
                    disabled:false,
                    checked:true,
                    name:'exp1',
                    label:'Label of Radio'
           }"></sdc-radio>`
    }).case('Unchecked', {
        showSource: true,
        template: `<sdc-radio [option] = "{
                    disabled:false,
                    checked:false,
                    name:'exp2',
                    label:'Label of Radio'
           }"></sdc-radio>`
    })
    .case('Disabled', {
        showSource: true,
        template: `<sdc-radio [option] = "{
                    disabled:true,
                    checked:false,
                    name:'exp3',
                    label:'Label for Radio'
           }"></sdc-radio>`
    }).case('Disabled and Checked', {
        showSource: true,
        template: `<sdc-radio [option] = "{
                    disabled:true,
                    checked:true,
                    name:'exp4',
                    label:'Label for Radio'
           }"></sdc-radio>`
    }).case('Radio Buttons Group', {
        showSource: true,
        template: `<sdc-radio-group [options] = "{
            disabled: true,
            items: [{
                value: 'val1',
                checked: true,
                name: 'exp5',
                label: 'Label of Radio1'
            }, {
                value: 'val2',
                checked: false,
                name: 'exp5',
                label: 'Label of Radio2'
            }]
        }" [disabled] = "false"></sdc-radio-group>`
    }).case('Radio Buttons Group Disabled', {
        showSource: true,
        template: `<sdc-radio-group [options] = "{
                items: [{
                    value: 'val1',
                    checked: true,
                    name: 'exp6',
                    label: 'Label of Radio1'
                }, {
                    value: 'val2',
                    checked: false,
                    name: 'exp6',
                    label: 'Label of Radio2'
                }]
            }" [disabled] = "true"></sdc-radio-group>`
    }).case('Radio Buttons Group Vertical', {
        showSource: true,
        template: `<sdc-radio-group [direction] = "'vertical'" [options] = "{
                                items: [{
                                    value:'val1',
                                    checked: true,
                                    name: 'exp6',
                                    label: 'Label of Radio1'
                                }, {
                                    value:'val2',
                                    checked: false,
                                    name: 'exp6',
                                    label: 'Label of Radio2'
                                }]
        }" [disabled] = "false"></sdc-radio-group>`
});
