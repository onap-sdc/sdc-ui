import React from 'react';
import Accordion from '../../src/react/Accordion.js';

import renderer from 'react-test-renderer';

describe('Accordion', () => {
	test('Accordion - Default', () => {
		const accordion = renderer.create(<Accordion title='Accordion'>Accordion body</Accordion>).toJSON();
		expect(accordion).toMatchSnapshot();
	});
});