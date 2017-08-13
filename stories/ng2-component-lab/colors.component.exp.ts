import {experimentOn} from '@islavi/ng2-component-lab';

const primaryColors = {
    blue: '#009fdb',
    'dark-blue': '#0568ae',
    'light-blue': '#71c5e8',
    green: '#4ca90c',
    'dark-green': '#007a3e',
    'light-green': '#b5bd00',
    orange: '#ea7400',
    yellow: '#ffb81c',
    'dark-purple': '#702f8a',
    purple: '#9063cd',
    'light-purple': '#caa2dd',
    black: '#000000',
    'dark-gray': '#5a5a5a',
    gray: '#959595',
    'light-gray': '#d2d2d2',
    white: '#ffffff'
};

const secondaryColors = {
    red: '#cf2a2a',
    'background-gray': '#f2f2f2',
    'text-black': '#191919',
    'link-blue': '#056bae',
    'functional-green': '#007a3e',
    'tlv-gray': '#f8f8f8',
    'tlv-light-gray': '#eaeaea',
    'tlv-hover': '#e6f6fb',
};

export default experimentOn('Colors')
    .case('Colors Palette', {
        context: {
            colorsMap: primaryColors,
        },
        template: `
            <colors-table [tableTitle]="'Primary Colors'" [tableMapColors]="colorsMap"></colors-table>
    `
    }).case('', {
        context: {
            colorsMap: secondaryColors,
        },
        template: `
            <colors-table [tableTitle]="'Secondary Colors'" [tableMapColors]="colorsMap"></colors-table>
    `
    });
