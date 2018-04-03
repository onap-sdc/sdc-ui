import React from 'react';
import Examples from './utils/Examples.js';
import Checklist from '../../src/react/Checklist.js';
import HTMLListChecked from '../../components/checklist/checklist-with-checked-items.html';
import HTMLListDisabled from '../../components/checklist/checklist-with-disabled-items.html';
const items = [
    {
        label: 'apple',
        value: 'apple',
        dataTestId: 'apple',
        checked: true
    },
    {
        label: 'banana',
        value: 'banana',
        dataTestId: 'banana',
        checked: false
    },
    {
        label: 'orange',
        value: 'orange',
        dataTestId: 'orange',
        checked: true
    }
];

const itemsDisabled = [
    {
        label: 'apple',
        value: 'apple',
        dataTestId: 'apple',
        checked: true,
        disabled: true
    },
    {
        label: 'banana',
        value: 'banana',
        dataTestId: 'banana',
        checked: false,
        disabled: true
    },
    {
        label: 'orange',
        value: 'orange',
        dataTestId: 'orange',
        checked: false
    }
];

let examples = {
    Basic: {
        jsx: <Checklist items={items} onChange={() => { }} />,
        html: HTMLListChecked
    },
    Disabled: {
        jsx: <Checklist items={itemsDisabled} onChange={() => { }} />,
        html: HTMLListDisabled
    }
};

const ChecklistStory = () => (
    <Examples examples={examples} />
);

export default ChecklistStory;