/**
 * Created by ob0695 on 10/3/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Input')
    .case('Normal input', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter value"></sdc-input>
    `
    }).case('Disabled input', {
        showSource: true,
        template: `
      <sdc-input [disabled]="true"></sdc-input>
    `
    })
    .case('Input required', {
        showSource: true,
        template: `
      <sdc-input label="Please Enter Value" required="true" [maxLength]="5"></sdc-input>
    `
    }).case('Input with max length', {
        showSource: true,
        template: `
      <sdc-input [maxLength]="5"></sdc-input>
    `
    }).case('Integer input with validation error', {
        showSource: true,
        template: `
      <sdc-input pattern="^(([-+]?\\d+)|([-+]?0x[0-9a-fA-F]+))$"></sdc-input>
    `
    });
