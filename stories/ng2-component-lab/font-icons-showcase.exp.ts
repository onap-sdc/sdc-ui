import {experimentOn} from '@islavi/ng2-component-lab';

import fontIconsMap from '../../src/font-icons-map';

export default experimentOn('Font Icons')
    .case('Font Icons', {
        showSource: false,
        context: {
            fontIconsMap
        },
        template: `
            <font-icons-table [fontIconsMap]="fontIconsMap"></font-icons-table>
    `
    });
