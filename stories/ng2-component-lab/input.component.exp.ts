/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

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
        <sdc-input label="Please Enter value"></sdc-input>
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
        id: 'Input required',
        title: 'Input required',
        description: 'Input required',
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
        id: 'integerInputWithValidationError',
        title: 'Integer input with validation error',
        description: 'Integer input with validation error',
        showSource: true,
        template: `
        <sdc-input pattern="^(([-+]?\\d+)|([-+]?0x[0-9a-fA-F]+))$"></sdc-input>
    `
    },
    {
        id: 'inputWithPlaceholder',
        title: 'Input with placeholder',
        description: 'Input with placeholder',
        showSource: true,
        template: `
      <sdc-input placeHolder="TEXT"></sdc-input>
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
