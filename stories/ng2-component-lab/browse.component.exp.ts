/**
 * Created by rc2122 on 11/23/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {FileDataModel} from "../../src/angular/form-elements/browse/models/FileData";
export default experimentOn('Browse').group('Browse', [
    {
        id: 'browse',
        title: 'Browse',
        showSource: true,
        template: `<sdc-browse [placeholder]="'select file'" [label]="'my file:'" [extensions]="'jpg,svg'" #browse></sdc-browse>
        <div>This is {{browse.isValid ? '' : 'not'}} valid file</div>`,
    },
    {
        id: 'required-browse',
        title: 'Required browse field',
        showSource: true,
        template: `<sdc-browse [placeholder]="'select file'" [label]="'my file:'" [extensions]="'jpg,svg'" [isRequired]="true"></sdc-browse>`,
    },
    {
        id: 'disabled-browse',
        title: 'Disabled browse field',
        showSource: true,
        template: `<sdc-browse [placeholder]="'select file'" [label]="'my file:'" [extensions]="'jpg,svg'" [disabled]="true"></sdc-browse>`,
    }
]);
