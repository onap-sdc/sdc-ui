import { experimentOn } from '@islavi/ng2-component-lab';
import { ChecklistItemModel } from "../../src/angular/checklist/models/ChecklistItem";
import { ChecklistModel } from "../../src/angular/checklist/models/Checklist";

const styleCode = 'h5{color:red;} pre{background-color: #d1d1d1; padding: 10px;}';
const checklistValuesExample1 = [];

const checkListExample1: ChecklistModel =  new ChecklistModel(checklistValuesExample1,
    [new ChecklistItemModel('apple'),
        new ChecklistItemModel('banana'),
        new ChecklistItemModel('orange')]);

const checklistValuesExample2 = [];
const checkListExample2: ChecklistModel =  new ChecklistModel(checklistValuesExample2,
    [new ChecklistItemModel('apple', false, false, null, 0),
        new ChecklistItemModel('banana', false, false, null, 1),
        new ChecklistItemModel('orange', false, false, null, 2)]);

const checklistValuesExample3 = [];
const checkListExample3: ChecklistModel =  new ChecklistModel(checklistValuesExample3,
    [new ChecklistItemModel('apple', false, true),
        new ChecklistItemModel('banana'),
        new ChecklistItemModel('orange', false, true)]);

const checklistValuesExample4 = [];
const checkListExample4: ChecklistModel =  new ChecklistModel(checklistValuesExample4,
    [new ChecklistItemModel('apple', true, true),
        new ChecklistItemModel('banana', true),
        new ChecklistItemModel('orange')]);

const checklistValuesExample5 = [];
const innerChecklistValues = [];
const checkListExample5: ChecklistModel =  new ChecklistModel(checklistValuesExample5,
    [new ChecklistItemModel('apple', false, false,
            new ChecklistModel(innerChecklistValues,
                            [new ChecklistItemModel('red'), new ChecklistItemModel('green'), new ChecklistItemModel('yellow')])),
        new ChecklistItemModel('banana'),
        new ChecklistItemModel('orange')]);

const checklistFirstLevelValuesExample6 = [];
const checklistSecondLevelValuesExample6 = [];
const checklistThirdLevelValuesExample6 = [];
const checkListExample6: ChecklistModel =  new ChecklistModel(checklistFirstLevelValuesExample6,
    [new ChecklistItemModel('1', false, false,
        new ChecklistModel(checklistSecondLevelValuesExample6, [new ChecklistItemModel('1.1'),
                                                                new ChecklistItemModel('1.2', false, false, new ChecklistModel(checklistThirdLevelValuesExample6, [new ChecklistItemModel('1.2.1'),
                                                                                                                                                                    new ChecklistItemModel('1.2.2'),
                                                                                                                                                                    new ChecklistItemModel('1.2.3')])),
                                                                new ChecklistItemModel('1.3')])),
        new ChecklistItemModel('2'),
        new ChecklistItemModel('3')]);

export default experimentOn('Checklist')
    .group("Checklist",[
      {
        id: 'checklist',
        showSource: true,
        context: {
            checklistModel: checkListExample1,
            checklistValues: checklistValuesExample1
        },
        styles: [styleCode],
        title: 'Checklist',
        description: `
            <pre>
            <h5>The checklistModel parameter:</h5>
            const checklistValues = [];
            const checklistModel: ChecklistModel =
                new ChecklistModel(checklistValues,
                [new ChecklistItemModel('apple'),
                new ChecklistItemModel('banana'),
                new ChecklistItemModel('orange')]);
            </pre>
        `,
        template: `
            <span>Selected values: {{checklistValues.toString()}}</span>
            <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
        `,
      },
      {
        id: 'checklistWithValues',
        showSource: true,
        context: {
            checklistModel: checkListExample2,
            checklistValues: checklistValuesExample2
        },
        styles: [styleCode],
        title: 'Checklist with values',
        description: `
            <pre>
                <h5>The checklistModel parameter:</h5>
                const checklistValues = [];
                const checklistModel: ChecklistModel =  new ChecklistModel(checklistValues,
                    [new ChecklistItemModel('apple', false, false, null, 0),
                    new ChecklistItemModel('banana', false, false, null, 1),
                    new ChecklistItemModel('orange', false, false, null, 2)]);
            </pre>
        `,
        template: `
            <span>Selected values: {{checklistValues.toString()}}</span>
            <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
        `
    },
    {
        id: 'checklistWithSomeCheckedItems',
        title: 'Checklist with some checked items',
        showSource: true,
        context: {
            checklistModel: checkListExample3,
            checklistValues: checklistValuesExample3
        },
        styles: [styleCode],
        description: `
            <pre><h5>The checklistModel parameter:</h5>
            const checklistValues = [];
            const checklistModel: ChecklistModel =  new ChecklistModel(checklistValues,
                [new ChecklistItemModel('apple', false, true),
                new ChecklistItemModel('banana'),
                new ChecklistItemModel('orange', false, true)]);
            </pre>
        `,
        template: `
            <span>Selected values: {{checklistValues.toString()}}</span>
            <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
        `
    },
    {
        id: 'checklistWithSomeDisabledItems',
        title: 'Checklist with some disabled items',
        showSource: true,
        context: {
            checklistModel: checkListExample4,
            checklistValues: checklistValuesExample4
        },
        styles: [styleCode],
        description: `
            <pre><h5>The checklistModel parameter:</h5>
            const checklistValues = [];
            const checklistModel: ChecklistModel =  new ChecklistModel(checklistValues,
                [new ChecklistItemModel('apple', true, true),
                new ChecklistItemModel('banana', true),
                new ChecklistItemModel('orange')]);
            </pre>
        `,
        template: `
            <span>Selected values: {{checklistValues.toString()}}</span>
            <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
        `
    },
    {
        id: 'twoLevelsChecklist',
        title: 'Multi-levels checklist',
        showSource: true,
        context: {
            checklistModel: checkListExample5,
            checklistValues: checklistValuesExample5,
            innerChecklistValues: innerChecklistValues
        },
        styles: [styleCode],
        description: `
            <pre>
            <h5>The checklistModel parameter:</h5>
            const checklistValues = [];
            const innerChecklistValues = [];
            const checklistModel: ChecklistModel =  new ChecklistModel(checklistValues,
                        [new ChecklistItemModel('apple', false, false,new ChecklistModel(innerChecklistValues,[new ChecklistItemModel('red'),
                                                                                                                        new ChecklistItemModel('green'),
                                                                                                                        new ChecklistItemModel('yellow')])),
                        new ChecklistItemModel('banana'),
                        new ChecklistItemModel('orange')]);</pre>
        `,
        template: `
            <div>Selected values: {{checklistValues.toString()}}</div>
            <div>Inner checklist selected values: {{innerChecklistValues.toString()}}</div>
            <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
        `
    },
    {
        id: 'multiLevelsChecklist',
        title: 'Multi-levels checklist',
        showSource: true,
        context: {
            checklistModel: checkListExample6,
            checklistFirstLevelValues: checklistFirstLevelValuesExample6,
            checklistSecondLevelValues: checklistSecondLevelValuesExample6,
            checklistThirdLevelValues: checklistThirdLevelValuesExample6
        },
        styles: [styleCode],
        description: `
            <pre><h5>The checklistModel parameter:</h5>
            const checklistFirstLevelValues = [];
            const checklistSecondLevelValues = [];
            const checklistThirdLevelValues = [];
            const checklistModel: ChecklistModel =  new ChecklistModel(checklistFirstLevelValues,
                [new ChecklistItemModel('1', false, false,
                new ChecklistModel(checklistSecondLevelValues, [new ChecklistItemModel('1.1'),
                new ChecklistItemModel('1.2', false, false,
                new ChecklistModel(checklistThirdLevelValues, [new ChecklistItemModel('1.2.1'),
                    new ChecklistItemModel('1.2.2'),
                    new ChecklistItemModel('1.2.3')])),
                    new ChecklistItemModel('1.3')])),
            new ChecklistItemModel('2'),
            new ChecklistItemModel('3')]);
            </pre>
        `,
        template: `
            <div>Selected values: {{checklistFirstLevelValues.toString()}}</div>
            <div>Second level checklist selected values: {{checklistSecondLevelValues.toString()}}</div>
            <div>Third level checklist selected values: {{checklistThirdLevelValues.toString()}}</div>
            <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
        `
    }
    ]);
