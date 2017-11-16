import {experimentOn} from '@islavi/ng2-component-lab';
const alert1  = window.alert;
const console1  = console.log;

export default experimentOn('Tiles')
    .case('Tile Sample purple', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `
                <sdc-tile>
                    <sdc-tile-header text="P" color="purple" header></sdc-tile-header>
                    <sdc-tile-info text="Router" color = "purple" pre_title="test" info></sdc-tile-info>
                    <sdc-tile-info text="Footer" icon="test" footer></sdc-tile-info>
                </sdc-tile>`
    });
