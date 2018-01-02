import React from 'react';
import ModalHeader from '../../src/react/ModalHeader.js';

import renderer from 'react-test-renderer';

describe('ModalHeader', () => {
	test('basic test', () => {
	    const header = renderer.create(<ModalHeader/>).toJSON();        
	    expect(header).toMatchSnapshot();
	});
});