/**
 * Created by rc2122 on 11/23/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';
import {FileDataModel} from "../../src/angular/form-elements/browse/models/FileData";
export default experimentOn('Browse')
    .case('Browse', {
        showSource: true,
        template: `<sdc-browse [placeholder]="'select file'" [label]="'my file:'" [extensions]="'jpg,svg'"></sdc-browse>`,
    }).case('Required browse field', {
        showSource: true,
        template: `<sdc-browse [placeholder]="'select file'" [label]="'my file:'" [extensions]="'jpg,svg'" [isRequired]="true"></sdc-browse>`,
    }).case('Disabled browse field', {
        showSource: true,
        template: `<sdc-browse [placeholder]="'select file'" [label]="'my file:'" [extensions]="'jpg,svg'" [disabled]="true"></sdc-browse>`,
    });
