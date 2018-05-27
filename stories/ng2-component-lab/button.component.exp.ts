import { experimentOn } from '@islavi/ng2-component-lab';
import { LowerCasePipe } from '@angular/common';

const buttonTypes = ['primary', 'secondary', 'link', 'success', 'error', 'warning', 'info'];
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
            buttonClicked: (): void => {
                window.alert("OK");
            }
        },
        title: "Default button",
        template: `
            <sdc-button
                text="Default button long text"
                testId="longButton"
                (click)="buttonClicked()">
            </sdc-button>
            <sdc-button
                text="Sample button"
                (click)="buttonClicked()"
                [testId]="'defaultButtonTestId'"
               >
            </sdc-button>


            `
    }
]);

buttonTypes.forEach((buttonType) => {
    experiment.group(`${buttonType} button`, [
    {
        id: `${buttonType} button`,
        showSource: true,
        context: {
            buttonClicked: (): void => {
                window.alert("OK");
            }
        },
        title: `Button ${buttonType}`,
        template: buttonSizes.map((buttonSize) =>
            `
            <span style="display: inline-block;">
            <div>${buttonSize}</div><br>
            <sdc-button
                text="Sample"
                type="${buttonType}"
                size="${buttonSize}"
                (click)="buttonClicked()">
            </sdc-button>
            </span>
            `).join('\n')
    },
    {
        id: `${buttonType} button disabled`,
        showSource: true,
        context: {
            buttonClicked: (): void => {
                window.alert("OK");
            }
        },
        title: `${buttonType} button disabled`,
        template: buttonSizes.map((buttonSize) =>
            `
            <span style="display: inline-block;">
            <div>${buttonSize}</div><br>
            <sdc-button
                text="Sample"
                type="${buttonType}"
                size="${buttonSize}"
                (click)="buttonClicked()"
                [disabled]="true">
            </sdc-button>
            </span>
            `).join('\n')
    }
    ]);
});

experiment.group("Buttons with icons", [
    {
        id: "buttonsWithIcons",
        showSource: true,
        description: `Buttons with icons forward`,
        context: {
            buttonClicked: (): void => {
                window.alert("OK");
            }
        },
        title: "Button with icons",
        template: `
            <sdc-button
                text="Default button long text"
                (click)="buttonClicked()"
                icon_name="settings-o"
                icon_position="left"
               >
            </sdc-button>

            <sdc-button
                text="Sample button"
                (click)="buttonClicked()"
                icon_name="plus-circle-o"
                icon_position="left"
                >
            </sdc-button>

            <sdc-button
                text="Sample button"
                 type="secondary"
                (click)="buttonClicked()"
                icon_name="plus-circle"
                icon_position="right"
                >
            </sdc-button>

            <sdc-button
                text="Sample button"
                type="secondary"
                (click)="buttonClicked()"
                icon_name="caret2-right-circle-o"
                icon_position="right"
              >
            </sdc-button>

           `
    }
]);

experiment.group("Buttons with spinners", [
    {
        id: "buttonsWithSpinnersRight",
        showSource: true,
        description: `Click the button to see the spinner shows for 2 seconds`,
        context: {
            buttonClicked: (button): void => {
                button.show_spinner = true;
                setTimeout(() => {button.show_spinner = false},2000);
            },
        },
        title: "Button with spinner on the right",
        template: `
            <sdc-button
                text="Click to show spinner"
                (click)="buttonClicked(button)"
                [show_spinner]="false"
                spinner_position="right"
                #button
               >
            </sdc-button>

           `
    },
    {
        id: "buttonsWithSpinnersLeft",
        showSource: true,
        description: `Click the button to see the spinner shows for 2 seconds`,
        context: {
            buttonClicked: (button): void => {
                button.show_spinner = true;
                setTimeout(() => {button.show_spinner = false},2000);
            },
        },
        title: "Button with spinner on the left",
        template: `
            <sdc-button
                text="Click to show spinner"
                (click)="buttonClicked(button)"
                spinner_position="left"
                #button
               >
            </sdc-button>

           `
    }
]);
export default experiment;
