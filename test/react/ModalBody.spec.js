import React from 'react';
import ModalBody from '../../src/react/ModalBody.js';

import renderer from 'react-test-renderer';

describe('ModalBody', () => {
	test('basic test', () => {
	    const header = renderer.create(<ModalBody/>).toJSON();        
	    expect(header).toMatchSnapshot();
	});
});