import { experimentOn } from '@islavi/ng2-component-lab';
import { IconPosition } from '../../src/angular/buttons/button.component';

const buttonTypes = ['primary', 'secondary', 'link', 'alert'];
const buttonSizes = ['large', 'medium', 'small', 'x-small', 'default'];
const experiment = experimentOn('Button');

experiment.group("Default button", [
    {
        id: "defaultButton",
        showSource: true,
        description: `Default button, does not need to supply type or size.
        <br>The size of the button set to 'default' so it will shrink or expand according to the content.
        `,
        context: {
            buttonClicked: ():void => {
                window.alert("OK");
            }
        },
        title: "Default button",
        template: `
            <sdc-button
                text="Default button long text"
                (click)="buttonClicked()">
            </sdc-button>
            <sdc-button
                text="Sample button"
                (click)="buttonClicked()"
               >
            </sdc-button>


            `
    }
]);

buttonTypes.forEach((buttonType) => {
    [false, true].forEach((buttonDisabled) => {
        experiment.group(`Button ${buttonType} ${buttonDisabled ? ' disabled' : ''}`, [   {
            id: `Button ${buttonType}${buttonDisabled ? ' disabled' : ''}`,
            showSource: true,
            context: {
                buttonClicked: ():void => {
                    window.alert("OK");
                }
            },
            title: `Button ${buttonType}${buttonDisabled ? ' disabled' : ''}`,
            template: buttonSizes.map((buttonSize) =>
                `
                <span style="display: inline-block;">
                <div>${buttonSize}</div><br>
                <sdc-button
                    text="Sample"
                    type="${buttonType}"
                    size="${buttonSize}"
                    (click)="buttonClicked()"
                    ${buttonDisabled ? ' [disabled]="true"' : ''}>
                </sdc-button>
                </span>
                `).join('\n')
        }
        ]);
    });
});

experiment.group("Buttons with icons", [
    {
        id: "buttonsWithIcons",
        showSource: true,
        description: `Buttons with icons forward`,
        context: {
            buttonClicked: ():void => {
                window.alert("OK");
            }
        },
        title: "Default button",
        template: `


            <sdc-button
                text="Default button long text"
                (click)="buttonClicked()"
                icon_name="arrow_left"
               >
            </sdc-button>

            <sdc-button
                text="Sample button"
                (click)="buttonClicked()"
                icon_name="arrow_right"
                >
            </sdc-button>

            <sdc-button
                text="Sample button"
                 type="secondary"
                (click)="buttonClicked()"
                icon_name="arrow_line_left"
                >
            </sdc-button>

            <sdc-button
                text="Sample button"
                type="secondary"
                (click)="buttonClicked()"
                icon_name="arrow_line_right"
              >
            </sdc-button>

           `
    }
]);

export default experiment;
