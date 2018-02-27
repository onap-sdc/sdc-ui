import {experimentOn} from '@islavi/ng2-component-lab';

const colorMap = {
    'white': '#ffffff',
    'blue': '#009fdb',
    'light-blue': '#1eb9f3',
    'tlv-select': '#e6f6fb',
    'blue-disabled': '#9dd9ef',
    'dark-blue': '#0568ae',
    'black': '#000000',
    'rich-black': '#323943',
    'text-black': '#191919',
    'dark-gray': '#5a5a5a',
    'gray': '#959595',
    'light-gray': '#d2d2d2',
    'tlv-light-gray': '#eaeaea',
    'background-gray': '#f2f2f2',
    'green': '#4ca90c',
    'red': '#cf2a2a',
    'yellow': '#ffb81c',
    'dark-purple': '#702f8a',
    'purple': '#9063cd',
    'light-purple': '#caa2dd',
    'tlv-gray':'#f8f8f8'
};

export default experimentOn('Colors', 1)
    .group("Color palette", [
      {
        id: 'colorPalette',
        showSource: true,
        context: {
            colorMap
        },
        title: 'Color palette',
        description: 'Supported design colors',
        template: `<colors-table [tableTitle]="'Colors'" [tableMapColors]="colorMap"></colors-table>`,
      }
    ]
    );
