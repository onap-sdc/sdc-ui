import {experimentOn} from '@islavi/ng2-component-lab';
const alert1 = window.alert;

export default experimentOn('Button')
    .case('Primary Buttons : Large, Medium, Small', {
        showSource: true,
        context:{
          alert:alert1
        },
        template: `
                    <sdc-button [text]="'primary'" [type]="'primary'" [disabled]="false" [size]="'large'"></sdc-button>
                    <sdc-button  [text]="'primary'" [type]="'primary'" [disabled]="false" [size]="'medium'"></sdc-button>
                     <sdc-button  [text]="'primary'" [type]="'primary'" [disabled]="false" [size]="'small'"></sdc-button>`,
    }).case('Primary Button Disabled', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button [text]="'primary'" [type]="'primary'" [disabled]="true"></sdc-button>`,
    }).case('White Buttons : Large, Medium, Small', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `

            <sdc-button  [text]="'primary'" [type]="'white'" [disabled]="false" [size]="'large'" ></sdc-button>
            <sdc-button  [text]="'primary'" [type]="'white'" [disabled]="false" [size]="'medium'"></sdc-button>
            <sdc-button  [text]="'primary'" [type]="'white'" [disabled]="false" size="'small'"></sdc-button>
        `,
    }).case('White Button Disabled', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button [text]="'primary'" [type]="'white'" [disabled]="true"></sdc-button>`,
    }).case('Link Button', {
        showSource: true,
        context:{
            alert:alert1
        },
        template: `<sdc-button [text]="'primary'" [type]="'link'" [disabled]="false"></sdc-button>`,
    });
