import {experimentOn} from '@islavi/ng2-component-lab';

const buttonTypes = ['primary', 'white', 'link'];
const buttonSizes = ['large', 'medium', 'small', 'default'];
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
                text="Sample button"
                (click)="buttonClicked()"
                >
            </sdc-button>

            <sdc-button
                text="Default button long text"
                (click)="buttonClicked()">
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
                    text="Sample button"
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

experiment.group("Default button with icons", [
    {
        id: "defaultButtonwithIcon",
        showSource: true,
        description: `Buttons with the icons`,
        context: {
            buttonClicked: ():void => {
                window.alert("OK");
            }
        },
        title: "Default button",
        template: `
         <div style="display: flex; justify-content: space-between; width:80%;">  
          <sdc-button
                text="Sample button"
                (click)="buttonClicked()"
               [icon]="{
                    name:'arrow-left', 
                    side:'left',
                    color:'test'
                }"
                >
            </sdc-button>
             
            <sdc-button
                 text="Sample button"
                (click)="buttonClicked()"
                [icon]="{
                    name:'arrow-right', 
                    side:'right',
                    color:'test'
                }">
            </sdc-button>       
            
               <sdc-button
               type="white"
                 text="Sample button"
                (click)="buttonClicked()"
                [icon]="{
                    name:'arrowline-right', 
                    side:'right',
                    color:'test'
                }">
            </sdc-button>
               <sdc-button
                 text="Sample button"
                (click)="buttonClicked()"
                type='white'
                [icon]="{
                    name:'arrowline-left', 
                    side:'left',
                    color:'test'
                }">
            </sdc-button>
           
            </div>
            `
    }
]);
export default experiment;
