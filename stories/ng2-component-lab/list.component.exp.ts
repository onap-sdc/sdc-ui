/**
 * Created by rc2122 on 11/21/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('List')
    .case('Simple list', {
        showSource: true,
        template: `
        <sdc-list label="Please Enter value" 
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb']">
      
        </sdc-list>
    `
    }).case('List with unique validation', {
        showSource: true,
        template: `
        <sdc-list label="Please Enter value" 
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb']"
                [isUniqueList]="true"
                [uniqueErrorMessage]="'This value is already in the list'">
      
        </sdc-list>
    `
    }).case('Disabled list', {
        showSource: true,
        template: `
        <sdc-list label="Please Enter value" 
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb']"
                [isViewOnly]="true">
      
        </sdc-list>
    `
    }).case('List with some readonly items', {
        showSource: true,
        template: `
        <sdc-list label="Please Enter value" 
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb', 'ccc', 'ddd']"
                [isViewOnly]="[1,3]">
      
        </sdc-list>
    `
    });
