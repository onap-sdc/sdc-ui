import React from 'react';
import Panel from '../../src/react/Panel.js';

import renderer from 'react-test-renderer';

describe('Panel', () => {
    test('Panel - Default', () => {
        const panel = renderer.create(<Panel>Panel</Panel>).toJSON();
        expect(panel).toMatchSnapshot();
    });
});
