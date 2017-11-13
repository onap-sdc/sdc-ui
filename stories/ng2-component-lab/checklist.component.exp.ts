import { experimentOn } from '@islavi/ng2-component-lab';
import {ChecklistItemModel} from "../../src/angular/checklist/models/ChecklistItem";
import {ChecklistModel} from "../../src/angular/checklist/models/Checklist";

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
    [new ChecklistItemModel('apple', true),
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

export default experimentOn('Checklist')
    .case('Normal Checklist', {
        showSource: true,
        context: {
            checklistModel: checkListExample1,
            checklistValues: checklistValuesExample1
        },
        template: `
     <span>Selected values: {{checklistValues.toString()}}</span>
     <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
    `
    }).case('Checklist with values', {
        showSource: true,
        context: {
            checklistModel: checkListExample2,
            checklistValues: checklistValuesExample2
        },
        template: `
     <span>Selected values: {{checklistValues.toString()}}</span>
     <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
    `
    }).case('Checklist with some checked items', {
        showSource: true,
        context: {
            checklistModel: checkListExample3,
            checklistValues: checklistValuesExample3
        },
        template: `
     <span>Selected values: {{checklistValues.toString()}}</span>
     <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
    `
    }).case('Checklist with some disabled items', {
        showSource: true,
        context: {
            checklistModel: checkListExample4,
            checklistValues: checklistValuesExample4
        },
        template: `
     <span>Selected values: {{checklistValues.toString()}}</span>
     <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
    `
    }).case('Multi-levels checklist', {
        showSource: true,
        context: {
            checklistModel: checkListExample5,
            checklistValues: checklistValuesExample5,
            innerChecklistValues: innerChecklistValues
        },
        template: `
     <div>Selected values: {{checklistValues.toString()}}</div>
     <div>Inner checklist selected values: {{innerChecklistValues.toString()}}</div>
     <sdc-checklist [checklistModel]="checklistModel"></sdc-checklist>
    `
    });
