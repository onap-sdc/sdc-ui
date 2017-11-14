import {experimentOn} from '@islavi/ng2-component-lab';
const alert1  = window.alert;
const console1  = console.log;

export default experimentOn('Tiles')
    .case('Tile Sample', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `<sdc-tile [color] = "'purple'" [header] = "'R'"  [title] = "'Router'" [pre_title] = "'V 0.1'"  [footer] ="'Ready'" (tileClick)="alert($event)"></sdc-tile>`
    }).case('Tile Sample', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `<sdc-tile [color] = "'blue'" [header] = "'S'"  [title] = "'Router2'" [pre_title] = "'V 0.2'"  [footer] ="'Pending'" (tileClick)="alert($event)"></sdc-tile>`
    }).case('Tile Sample', {
        context: {
            alert: alert1,
            console: console1
        },
        showSource: true,
        template: `<sdc-tile [color] = "'blue'" [header] = "'VS'"  [title] = "'Router2'" [pre_title] = "'V 1.2'"  [footer] ="'Finished'" (tileClick)="alert($event)"></sdc-tile>`
    });
