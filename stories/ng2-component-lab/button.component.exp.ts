import { experimentOn } from '@islavi/ng2-component-lab';
import { ButtonComponent } from "./../../src/angular2/button.component";

export default experimentOn('Button')
  .case('Primary Default', {
    showSource: true,
    template: `<sdc-button>Button</sdc-button>`,
  })
  .case('Primary Default Disabled', {
    template: `<sdc-button>Button</sdc-button>`,
  })
  .case('White Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Gray Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Positive Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Negative Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Warning Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Primary Outline Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Gray Outline Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Positive Outline Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Negative Outline Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Primary Outline Rounded Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Gray Outline Rounded Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Positive Outline Rounded Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).case('Negative Outline Rounded Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  }).xcase('Warning Button', {
    context: {
      buttonLabel: 'Warning!',
    },
    styles: [`
      :host {
        text-align: center;
      }
    `],
    template: `
      <sdc-button [type]="warning">
        {{ buttonLabel }}
      </sdc-button>
    `
  })
  .xcase('Not Yet Implemented', {
    template: `
      <sdc-button raised>Raised Button</sdc-button>
    `
  })
