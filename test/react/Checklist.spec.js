import React from 'react';
import Checklist from '../../src/react/Checklist.js';

import renderer from 'react-test-renderer';

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


describe('Checklist', () => {
    test('Checklist - Default ', () => {
        const checklist = renderer.create(<Checklist items={items} onChange={() => { }} />).toJSON();
        expect(checklist).toMatchSnapshot();
    });

    test('Checklist - With disabled items ', () => {
        const checklist = renderer.create(<Checklist items={itemsDisabled} onChange={() => { }} />).toJSON();
        expect(checklist).toMatchSnapshot();
    });



});