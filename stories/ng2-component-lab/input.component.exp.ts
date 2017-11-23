/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Input')
    .case('Input with Patterns', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter value"  [placeHolder]="'Please enter something'" [patterns]="[
            {
                regex: '[A-Z]',
                error_message: 'Pattern 1 error'
            },
            {
                regex: '\\\\d',
                error_message: 'Pattern 2 error'
            }
        ]" ></sdc-input>
    `
    }).case('Regular input', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter value"  [placeHolder]="'Please enter something'" ></sdc-input>
    `
    }).case('Regular disabled input', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter value"  [disabled]="true"></sdc-input>
    `}).case('Regular input with Hint', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter value"  [placeHolder]="'Please enter something'" [hint]="true"></sdc-input>
    `
    }).case('Regular input with Hint and Required', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter value"  [placeHolder]="'Please enter something'" [required]="true" [hint]="true" #input></sdc-input>
      <div>
         <button (click)="input.validateInput('test')">Validate!</button> 
      </div>
    `
    });
