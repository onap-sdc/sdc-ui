import { experimentOn } from '@islavi/ng2-component-lab';

const colorMap = {
    'white': '#ffffff',
    'dark-blue': '#0568ae',
    'blue': '#009fdb',
    'light-blue': '#1eb9f3',
    'blue-disabled': '#9dd9ef',
    'lighter-blue': '#e6f6fb',
    'black': '#000000',
    'text-black': '#191919',
    'rich-black': '#323943',
    'dark-gray': '#5a5a5a',
    'gray': '#959595',
    'light-gray': '#d2d2d2',
    'silver': '#eaeaea',
    'light-silver': '#f2f2f2',
    'lighter-silver':'#f8f8f8',
    'green': '#4ca90c',
    'red': '#cf2a2a',
    'light-red':'#ed4141',
    'disabled-red':'#f4adad',
    'yellow': '#ffb81c',
    'dark-purple': '#702f8a',
    'purple': '#9063cd',
    'light-purple': '#caa2dd'
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
