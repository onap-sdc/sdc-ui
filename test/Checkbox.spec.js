import React from 'react';
import Checkbox from '../src/react/Checkbox.js';
import HTMLCheckboxDisabled from '../components/checkbox/checkbox-disabled.html';
import HTMLCheckboxUnchecked from '../components/checkbox/checkbox-unchecked.html';

import {mount, simulate} from 'enzyme';

describe('Checkbox', () => {
	test('Checkbox - unchecked', () => {
		const checkbox = mount(<Checkbox label='This is the checkbox label'/>);
		expect(checkbox.html().replace(/\s/g,'')).toEqual(HTMLCheckboxUnchecked.replace(/\s/g,''));
	});

	test('Checkbox - disabled', () => {
		const checkbox = mount(<Checkbox disabled={true} label='This is the checkbox label' />);
		expect(checkbox.html().replace(/\s/g,'')).toEqual(HTMLCheckboxDisabled.replace(/\s/g,''));
	});

	test('Checkbox - checked state changes', () => {
		const checkbox = mount(<Checkbox label='This is the checkbox label' />);
		expect(checkbox.instance().getChecked()).toEqual(false);
		checkbox.find('input').simulate('change', { target : { checked: true }});
		expect(checkbox.instance().getChecked()).toEqual(true);
		checkbox.find('input').simulate('change', { target : { checked: false }});
		expect(checkbox.instance().getChecked()).toEqual(false);
	});

	test('Checkbox - returns its value', () => {
		const checkbox = mount(<Checkbox label='This is the checkbox label' value='myVal' />);
		expect(checkbox.instance().getValue()).toEqual('myVal');
	});

})
