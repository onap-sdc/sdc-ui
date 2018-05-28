/**
 * Created by rc2122 on 5/24/2018.
 */
import { experimentOn } from '@islavi/ng2-component-lab';
const valueChange = (value: any): void => {
    console.log('The value was changed! >>>>', value);
};
export default experimentOn('Textarea').group('Textarea', [
    {
        id: 'simpleTextarea',
        title: 'An example for simple textare',
        description: "The textarea behaviors as the input component.",
        showSource: true,
        template: `
        <sdc-textarea label="Enter text:"></sdc-textarea>
    `
    },
    {
        id: 'disabledTextarea',
        showSource: true,
        title: 'Disabled textatea',
        description: 'Disabled textatea',
        template: `
        <sdc-textarea [disabled]="true"></sdc-textarea>
        `
    },
    {
        id: 'Textarea required',
        title: 'Textarea required',
        description: 'Textarea required (this add red * to the label, but does not perform validation, use sdc-validation for validation)',
        showSource: true,
        template: `
        <sdc-textarea label="Please Enter Value" required="true"></sdc-textarea>
      `
    },
    {
        id: 'textareaWithMaxLength',
        title: 'Textarea with max length',
        description: 'Textarea with max length',
        showSource: true,
        template: `
        <sdc-textarea [maxLength]="5"></sdc-textarea>
        `
    },
    {
        id: 'textareaWithPlaceholder',
        title: 'Textarea with placeholder, custom class, and tests ID',
        description: 'Textarea with placeholder',
        showSource: true,
        template: `
      <sdc-textarea placeHolder="Text..." [classNames]="'my-custom-class another-class'" [testId]="'customTestId'"></sdc-textarea>
    `
    },
    {
        id: 'textareaWithDebounce',
        title: 'Textarea with debounce time',
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
      <sdc-textarea [debounceTime]="5000" (valueChange)="changeEvent($event)"></sdc-textarea>
      `}
]);
