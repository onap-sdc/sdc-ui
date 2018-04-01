import { experimentOn } from '@islavi/ng2-component-lab';
import { Mode, Size } from "../../src/angular/common/enums";

export default experimentOn('Icons')
    .group('SvgIcons', [
        {
            id: 'SvgIcons',
            showSource: false,
            title: 'SVG Icons',
            template: `
            <svg-icons-table></svg-icons-table>
            `
        }
    ]);
