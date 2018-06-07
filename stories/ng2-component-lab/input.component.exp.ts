import { experimentOn } from '@islavi/ng2-component-lab';

const valueChange = (value: any): void => {
    console.log('The value was changed! >>>>', value);
};

export default experimentOn('Input')
  .group("Input",[
      {
        id: 'normalInput',
        showSource: true,
        title: 'Normal input',
        description: 'Normal input',
        template: `
        <sdc-input label="Please Enter value" name="myValue" testId="myTestId"></sdc-input>
        `
      },
      {
        id: 'disabledInput',
        showSource: true,
        title: 'Disabled input',
        description: 'Disabled input',
        template: `
        <sdc-input [disabled]="true"></sdc-input>
        `
      },
      {
        id: 'InputTypeNumber',
        showSource: true,
        title: 'Input type number',
        description: 'Input type number',
        template: `
        <sdc-input type='number'></sdc-input>
        `
      },
      {
        id: 'Input required',
        title: 'Input required',
        description: 'Input required (this add red * to the label, but does not perform validation, use sdc-validation for validation)',
        showSource: true,
        template: `
        <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
      `
      },
      {
        id: 'inputWithMaxLength',
        title: 'Input with max length',
        description: 'Input with max length',
        showSource: true,
        template: `
        <sdc-input [maxLength]="5"></sdc-input>
        `
    },
    {
        id: 'inputWithPlaceholder',
        title: 'Input with placeholder, custom class, and tests ID',
        description: 'Input with placeholder',
        showSource: true,
        template: `
      <sdc-input placeHolder="Text..." [classNames]="'my-custom-class another-class'" [testId]="'customTestId'"></sdc-input>
    `
    },
    {
        id: 'inputWithDebounce',
        title: 'Input with debounce time',
        description: `<pre>On value change event code:
        const valueChange = (value: any): void => {
            console.log('The value was changed! >>>>', value);
        };
        This event will happen 5 sec after the change
        </pre>`,
        showSource: true,
        context: {
            changeEvent: valueChange
        },
        template: `
      <sdc-input [debounceTime]="5000" (valueChange)="changeEvent($event)"></sdc-input>
      `
    }]);
