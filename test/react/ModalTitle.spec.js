import React from 'react';
import ModalTitle from '../../src/react/ModalTitle.js';

import renderer from 'react-test-renderer';

describe('ModalTitle', () => {
	test('basic test', () => {
	    const header = renderer.create(<ModalTitle>Title</ModalTitle>).toJSON();        
	    expect(header).toMatchSnapshot();
	});
});