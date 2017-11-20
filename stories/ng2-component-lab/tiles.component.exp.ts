import {experimentOn} from '@islavi/ng2-component-lab';
const alert1  = window.alert;
const console1  = console.log;

export default experimentOn('Tiles')
    .case('Tile Sample blue', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-header text="P" color="blue" header></sdc-tile-header>
                    <sdc-tile-info text="Router" color = "blue" pre_title="test"  icon="test_icon" info ></sdc-tile-info>
                    <sdc-tile-footer text="Footer" icon="test" footer></sdc-tile-footer>
                </sdc-tile>`
    }).case('Tile Sample purple', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-header text="P" color="purple" header></sdc-tile-header>
                    <sdc-tile-info text="Router" color = "purple" pre_title="test"  icon="test_icon" info ></sdc-tile-info>
                    <sdc-tile-footer text="Footer" icon="test" footer></sdc-tile-footer>
                </sdc-tile>`
    }).case('Tile Sample without footer', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-header text="P" color="purple" header></sdc-tile-header>
                    <sdc-tile-info text="Router" color = "purple" pre_title="test" icon="test_icon" info></sdc-tile-info>
                </sdc-tile>`
    }).case('Tile Sample without header', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-info text="Router" color = "purple" pre_title="test" icon="test_icon" info></sdc-tile-info>
                </sdc-tile>`
    }).case('Tile just with info', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-info text="Router" color = "purple" pre_title="test" info></sdc-tile-info>
                </sdc-tile>`
    })

