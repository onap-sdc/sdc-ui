import {experimentOn} from '@islavi/ng2-component-lab';
const alert1  = window.alert;
const console1  = console.log;

export default experimentOn('Tiles')
    .group("Tiles",[
      {
        id: 'tileSampleBlue',
        showSource: true,
        context: {
            alert: alert1,
            console: console1
        },
        title: 'Tile sample blue',
        description: 'Tile sample blue',
        template: `
            <sdc-tile [headerText]="'P'" [headerColor]="'blue'" [iconColor]="'blue'" [iconName]="'test_icon'">
                <sdc-tile-info>
                    <sdc-tile-info-line [type]="'title'">Router</sdc-tile-info-line>
                    <sdc-tile-info-line [type]="'subtitle'">Test</sdc-tile-info-line>
                </sdc-tile-info>
                <sdc-tile-footer>
                    <sdc-tile-footer-cell>Footer</sdc-tile-footer-cell>
                </sdc-tile-footer>
            </sdc-tile>
            `
    },
    {
        id: 'tileSamplePurple',
        title: 'Tile sample purple',
        description: 'Tile sample purple',
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
            <sdc-tile [headerText]="'P'" [headerColor]="'purple'" [iconName]="'test_icon'" [iconColor]="'purple'">
                <sdc-tile-info>
                    <sdc-tile-info-line [type]="'title'">Router</sdc-tile-info-line>
                    <sdc-tile-info-line [type]="'subtitle'">Test</sdc-tile-info-line>
                </sdc-tile-info>
                <sdc-tile-footer>Footer</sdc-tile-footer>
            </sdc-tile>
        `
    },
    {
        id: 'tileSampleWithoutFooter',
        title: 'Tile sample without footer',
        description: 'Tile sample without footer',
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
            <sdc-tile [headerColor]="'purple'" [headerText]="'P'" [iconColor]="'purple'" [iconName]="'test_icon'">
                <sdc-tile-info>
                    <sdc-tile-info-line [type]="'title'">Router</sdc-tile-info-line>
                    <sdc-tile-info-line [type]="'subtitle'">Test</sdc-tile-info-line>
                </sdc-tile-info>
            </sdc-tile>
        `
    },
    {
        id: 'tileSampleWithoutHeader',
        title: 'Tile sample without header',
        description: 'Tile sample without header',
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
            <sdc-tile [iconName]="'test_icon'" [iconColor]="'purple'">
                <sdc-tile-info>
                    <sdc-tile-info-line [type]="'title'">Router</sdc-tile-info-line>
                    <sdc-tile-info-line [type]="'subtitle'">Test</sdc-tile-info-line>
                </sdc-tile-info>
            </sdc-tile>
        `
    },
    {
        id: 'tileJustWithInfo',
        title: 'Tile just with info',
        description: 'Tile just with info',
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-info>
                        <sdc-tile-info-line [type]="'title'">Router</sdc-tile-info-line>
                        <sdc-tile-info-line [type]="'subtitle'">Test</sdc-tile-info-line>
                    </sdc-tile-info>
                </sdc-tile>`
    }
    ]);
