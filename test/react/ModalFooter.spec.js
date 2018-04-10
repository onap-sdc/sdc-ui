import React from 'react';
import ModalFooter from '../../src/react/ModalFooter.js';

import renderer from 'react-test-renderer';

describe('ModalFooter', () => {
	test('basic test', () => {
		const footer = renderer.create(<ModalFooter closeButtonText='Ok'/>).toJSON();        
		expect(footer).toMatchSnapshot();
	});
});