import {experimentOn} from '@islavi/ng2-component-lab';
const onClick = (e): void => {
    console.log('--CLICK EVENT--');
};
export default experimentOn('Button')
    .group("Primary button",[
      {
        id: 'primaryButton',
        showSource: true,
        title: 'Primary default',
        description: 'Simple primary default button',
        template: `<sdc-button>Button</sdc-button>`,
      },
      {
        id: 'primaryButtonDisabled',
        showSource: true,
        title: 'Primary default disabled',
        description: 'Simple primary default button disabled',
        template: `<sdc-button [disabled]="true">Button</sdc-button>`,
      },
      {
        id: 'primaryOutlineButton',
        showSource: true,
        title: 'Primary outline default button',
        description: 'Simple primary outline default button',
        template: `<sdc-button [sdcButtonStyle]="'outline'">Button</sdc-button>`,
      },
      {
        id: 'primaryOutlineButtonDisabled',
        showSource: true,
        title: 'Primary outline default disabled button',
        description: 'Simple primary outline default disabled button',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [disabled]="true">Button</sdc-button>`,
      }
    ]).group("White button",[
      {
        id: 'whiteButton',
        showSource: true,
        title: 'White button',
        description: 'Simple white button',
        template: `<sdc-button [color]="'white'">Button</sdc-button>`,
      },
      {
        id: 'whiteButtonDisabled',
        showSource: true,
        title: 'White button disabled',
        description: 'Simple white button disabled',
        template: `<sdc-button [color]="'white'" [disabled]="true">Button</sdc-button>`,
      },
      {
        id: 'whiteOutlineButton',
        showSource: true,
        title: 'White outline button',
        description: 'Simple white outline button',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'white'">Button</sdc-button>`,
      },
      {
        id: 'whiteOutlineButtonDisabled',
        showSource: true,
        title: 'White outline button disabled',
        description: 'Simple white outline button disabled',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'white'" [disabled]="true">Button</sdc-button>`,
      }
    ]).group("Gray button",[
      {
        id: 'grayButton',
        showSource: true,
        title: 'Gray button',
        description: 'Simple gray button',
        template: `<sdc-button [color]="'gray'">Button</sdc-button>`,
      },
      {
        id: 'grayButtonDisabled',
        showSource: true,
        title: 'Gray button disabled',
        description: 'Simple gray button disabled',
        template: `<sdc-button [color]="'gray'" [disabled]="true">Button</sdc-button>`,
      },
      {
        id: 'grayOutlineButton',
        showSource: true,
        title: 'Gray outline button',
        description: 'Simple gray outline button',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'gray'">Button</sdc-button>`,
      },
      {
        id: 'grayOutlineButtonDisabled',
        showSource: true,
        title: 'Gray outline button disabled',
        description: 'Simple gray outline button disabled',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'gray'" [disabled]="true">Button</sdc-button>`,
      }
    ]).group("Positive button",[
      {
        id: 'positiveButton',
        showSource: true,
        title: 'Positive button',
        description: 'Positive button',
        template: `<sdc-button [color]="'positive'">Button</sdc-button>`,
      },
      {
        id: 'positiveButtonDisabled',
        showSource: true,
        title: 'Positive button disabled',
        description: 'Positive button disabled',
        template: `<sdc-button [color]="'positive'" [disabled]="true">Button</sdc-button>`,
      },
      {
        id: 'positiveOutlineButton',
        showSource: true,
        title: 'Positive outline button',
        description: 'Positive outline button',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'positive'">Button</sdc-button>`,
      },
      {
        id: 'positiveOutlineButtonDisabled',
        showSource: true,
        title: 'Positive outline button disabled',
        description: 'Positive outline button disabled',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'positive'" [disabled]="true">Button</sdc-button>`,
      }
    ]).group("Negative button",[
      {
        id: 'negativeButton',
        showSource: true,
        title: 'Negative button',
        description: 'Negative button',
        template: `<sdc-button [color]="'negative'">Button</sdc-button>`,
      },
      {
        id: 'negativeButtonDisabled',
        showSource: true,
        title: 'Negative button disabled',
        description: 'Negative button disabled',
        template: `<sdc-button [color]="'negative'" [disabled]="true">Button</sdc-button>`,
      },
      {
        id: 'negativeOutlineButton',
        showSource: true,
        title: 'Negative outline button',
        description: 'Negative outline button',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'negative'">Button</sdc-button>`,
      },
      {
        id: 'negativeOutlineButtonDisabled',
        showSource: true,
        title: 'Negative outline button disabled',
        description: 'Negative outline button disabled',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'negative'" [disabled]="true">Button</sdc-button>`,
      }
    ]).group("Warning button",[
      {
        id: 'warningButton',
        showSource: true,
        title: 'Warning button',
        description: 'Warning button',
        template: `<sdc-button [color]="'warning'">Button</sdc-button>`,
      },
      {
        id: 'warningButtonDisabled',
        showSource: true,
        title: 'Warning button disabled',
        description: 'Warning button disabled',
        template: `<sdc-button [color]="'warning'" [disabled]="true">Button</sdc-button>`,
      },{
        id: 'warningOutlineButton',
        showSource: true,
        title: 'Warning outline button',
        description: 'Warning outline button',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'warning'">Button</sdc-button>`,
      },
      {
        id: 'warningOutlineButtonDisabled',
        showSource: true,
        title: 'Warning outline button disabled',
        description: 'Warning outline button disabled',
        template: `<sdc-button [sdcButtonStyle]="'outline'" [color]="'warning'" [disabled]="true">Button</sdc-button>`,
      }
    ]).group("Prevent double click",[
      {
        id: 'preventDoubleClickInButton',
        showSource: true,
        context: {
            onClick: onClick
        },
        title: 'Prevent double click',
        description: `
          Prevent double click, will add time ...
          <br>Try to click on this button, open the console in order to see the click event logs:
        `,
        template: `<sdc-button (click)="onClick($event)" [preventDoubleClick]="true">Button</sdc-button>`,
      }
    ]);
