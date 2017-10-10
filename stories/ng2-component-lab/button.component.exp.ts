import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Button')
    .case('Primary Default', {
        showSource: true,
        template: `<sdc-button>Button</sdc-button>`,
    })
    .case('Primary Default Disabled', {
        showSource: true,
        template: `<sdc-button [disabled]="true">Button</sdc-button>`,
    })
    .case('White Button', {
        showSource: true,
        template: `
      <sdc-button [color]="'white'">Button</sdc-button>
    `
    }).case('White Button Disabled', {
        showSource: true,
        template: `
      <sdc-button [color]="'white'" [disabled]="true">Button</sdc-button>
    `
    }).case('Gray Button', {
        showSource: true,
        template: `
      <sdc-button [color]="'gray'">Button</sdc-button>
    `
    }).case('Gray Button Disabled', {
        showSource: true,
        template: `
      <sdc-button [color]="'gray'" [disabled]="true">Button</sdc-button>
    `
    }).case('Positive Button', {
        showSource: true,
        template: `
      <sdc-button [color]="'positive'">Button</sdc-button>
    `
    }).case('Positive Button Disabled', {
        showSource: true,
        template: `
      <sdc-button [color]="'positive'" [disabled]="true">Button</sdc-button>
    `
    }).case('Negative Button', {
        showSource: true,
        template: `
      <sdc-button  [color]="'negative'" >Button</sdc-button>
    `
    }).case('Negative Button Disabled', {
        showSource: true,
        template: `
      <sdc-button  [color]="'negative'" [disabled]="true">Button</sdc-button>
    `
    }).case('Warning Button', {
        showSource: true,
        template: `
      <sdc-button [color]="'warning'">Button</sdc-button>
    `
    }).case('Warning Button Disabled', {
        showSource: true,
        template: `
      <sdc-button [color]="'warning'" [disabled]="true">Button</sdc-button>
    `
    }).case('Primary Outline', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'">Button</sdc-button>
    `
    }).case('Primary Outline Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [disabled]="true">Button</sdc-button>
    `
    }).case('Gray Outline', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [color]="'gray'">Button</sdc-button>
    `
    }).case('Gray Outline Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [color]="'gray'" [disabled]="true">Button</sdc-button>
    `
    }).case('Positive Outline', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [color]="'positive'">Button</sdc-button>
    `
    }).case('Positive Outline Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [color]="'positive'" [disabled]="true">Button</sdc-button>
    `
    }).case('Negative Outline', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [color]="'negative'">Button</sdc-button>
    `
    }).case('Negative Outline Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline'" [color]="'negative'" [disabled]="true">Button</sdc-button>
    `
    })
    .case('Primary Outline Rounded', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'">Button</sdc-button>
    `
    }).case('Primary Outline Rounded Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [disabled]="true">Button</sdc-button>
    `
    }).case('Gray Outline Rounded', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [color]="'grey'">Button</sdc-button>
    `
    }).case('Gray Outline Rounded Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [color]="'grey'" [disabled]="true">Button</sdc-button>
    `
    }).case('Positive Outline Rounded', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [color]="'positive'">Button</sdc-button>
    `
    }).case('Positive Outline Rounded Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [color]="'positive'" [disabled]="true">Button</sdc-button>
    `
    }).case('Negative Outline Rounded', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [color]="'negative'">Button</sdc-button>
    `
    }).case('Negative Outline Rounded Disabled', {
        showSource: true,
        template: `
      <sdc-button [type]="'outline-rounded'" [color]="'negative'" [disabled]="true">Button</sdc-button>
    `
    })
