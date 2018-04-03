import React from 'react';
import Filter from '../../src/react/Filter.js';

import renderer from 'react-test-renderer';

describe('Filter', () => {
    test('Filter - Default', () => {
        const filter = renderer.create(<Filter>Filter</Filter>).toJSON();
        expect(filter).toMatchSnapshot();
    });
});
