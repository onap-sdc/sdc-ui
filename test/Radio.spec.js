import React from 'react';
import Radio from '../src/react/Radio.js';
import HTMLRadioDisabled from '../components/radio/radio-disabled.html';
import HTMLRadioUnchecked from '../components/radio/radio-unchecked.html';

import {mount, simulate} from 'enzyme';

describe('Radio', () => {
	test('Radio - unchecked', () => {
		const radio = mount(<Radio name='grp4' label='This is the radio label' value='1' />);
		expect(radio.html().replace(/\s/g,'')).toEqual(HTMLRadioUnchecked.replace(/\s/g,''));
	});

	test('Radio - disabled', () => {
		const radio = mount(<Radio name='grp2' disabled={true} label='This is the radio label' value='1' />);
		expect(radio.html().replace(/\s/g,'')).toEqual(HTMLRadioDisabled.replace(/\s/g,''));
	});

	test('Radio - checked state changes', () => {
		const radio = mount(<Radio label='This is the radio label' />);
		expect(radio.instance().getChecked()).toEqual(false);
		radio.find('input').simulate('change', { target : { checked: true }});
		expect(radio.instance().getChecked()).toEqual(true);
		radio.find('input').simulate('change', { target : { checked: false }});
		expect(radio.instance().getChecked()).toEqual(false);
	});

	test('Radio - returns its value', () => {
		const radio = mount(<Radio label='This is the radio label' value='myVal' />);
		expect(radio.instance().getValue()).toEqual('myVal');
	});

})
