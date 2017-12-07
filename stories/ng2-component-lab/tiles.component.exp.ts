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
            <sdc-tile>
                <sdc-tile-header text="P" color="blue" header></sdc-tile-header>
                <sdc-tile-info title="Router" color = "blue" subtitle="test"  icon="test_icon" info ></sdc-tile-info>
                <sdc-tile-footer text="Footer" icon="test" footer></sdc-tile-footer>
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
            <sdc-tile>
                <sdc-tile-header text="P" color="purple" header></sdc-tile-header>
                <sdc-tile-info title="Router" color = "purple" subtitle="test" supertitle="superTitle" icon="test_icon" info ></sdc-tile-info>
                <sdc-tile-footer text="Footer" icon="test" footer></sdc-tile-footer>
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
            <sdc-tile>
                <sdc-tile-header text="P" color="purple" header></sdc-tile-header>
                <sdc-tile-info title="Routesdfsasdfsfsdsdfsdsdfsfsdfsfsdfsdfsdfsdfsdsdffr" color = "purplesdfsdfsdfsssddfsdf" subtitle="sdf" supertitle="superTisdfsdfsdftlsdfsdfsdfsdfsdfsdfsdfsdfsdfasdfa" icon="test_icon" info></sdc-tile-info>
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
            <sdc-tile>
                <sdc-tile-info title="Router" color = "purple" subtitle="test" supertitle="superTitle" icon="test_icon" info></sdc-tile-info>
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
                    <sdc-tile-info title="Router" color = "purple"  supertitle="superTitle" subtitle="test" info></sdc-tile-info>
                </sdc-tile>`
    }
    ]);
