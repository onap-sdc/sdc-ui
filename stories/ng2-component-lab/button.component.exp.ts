import {experimentOn} from '@islavi/ng2-component-lab';
const alert1 = window.alert;

export default experimentOn('Button')
    .case('Primary Default', {
        showSource: true,
        context:{
          alert:alert1
        },
        template: `<sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'primary'" [disabled]="false" [size]="'large'"></sdc-button>
                    <sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'primary'" [disabled]="false" [size]="'medium'"></sdc-button>
                     <sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'primary'" [disabled]="false" [size]="'small'"></sdc-button>`,
    }).case('Primary Default', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'primary'" [disabled]="true"></sdc-button>`,
    }).case('White Default', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'white'" [disabled]="false"></sdc-button>`,
    }).case('White Default, Disabled', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'white'" [disabled]="true"></sdc-button>`,
    }).case('White Default, Disabled', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button (btnClick)="alert('hi')"  [text]="'Button'" [type]="'link'" [disabled]="false"></sdc-button>`,
    });
