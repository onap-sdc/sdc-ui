import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Tag Cloud').group('Tag Cloud', [
    {
        id: 'list',
        title: 'Simple tag-cloud',
        description: 'Simple tag-cloud',
        showSource: true,
        template: `
        <sdc-tag-cloud label="Please Enter value"
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb']">

        </sdc-tag-cloud>
    `
    },
    {
        id: 'unique-tag-cloud',
        title: 'List with unique validation',
        description: 'List with unique validation',
        showSource: true,
        template: `
        <sdc-tag-cloud label="Please Enter value"
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb']"
                [isUniqueList]="true"
                [uniqueErrorMessage]="'This value is already in the list'">

        </sdc-tag-cloud>
    `
    },
    {
        id: 'disabled-tag-cloud',
        title: 'Disabled tag-cloud',
        description: 'When the parameter isViewOnly = true, the tag-cloud control is disabled',
        showSource: true,
        template: `
        <sdc-tag-cloud label="Please Enter value"
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb']"
                [isViewOnly]="true">

        </sdc-tag-cloud>
    `
    },
    {
        id: 'tag-cloud-with-disabled-items',
        title: 'List with some readonly items',
        description: 'The parameter isViewOnly can get an array of indexes of tag-cloud items.',
        showSource: true,
        template: `
        <sdc-tag-cloud label="Please Enter value"
                placeholder="Type a value and then click enter or '+'"
                [list]="['aaa', 'bbb', 'ccc', 'ddd']"
                [isViewOnly]="[1,3]">

        </sdc-tag-cloud>
    `
    }
]);

