import React from 'react';
import RadioGroup from '../src/react/RadioGroup.js';

import {mount, simulate} from 'enzyme';

describe('RadioGroup', () => {
	test('RadioGroup - can be assigned default value', () => {
		const radio = mount(<RadioGroup name='grp1' defaultValue='2' title='Group A'
								onChange={()=>{}} data-test-id='grp1'
								options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />);
		expect(radio.instance().getValue()).toEqual('2');
	});

	test('RadioGroup - value overrides default value', () => {
		const radio = mount(<RadioGroup name='grp1' defaultValue='2' value='1' title='Group A'
								onChange={()=>{}} data-test-id='grp1'
								options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />);
		expect(radio.instance().getValue()).toEqual('1');
	});

	test('RadioGroup - can have no value', () => {
		const radio = mount(<RadioGroup name='grp1' title='Group A'
								onChange={()=>{}} data-test-id='grp1'
								options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />);
		expect(radio.instance().getValue()).toEqual(undefined);
	});

	test('RadioGroup - can be rendered without title', () => {
		const radio = mount(<RadioGroup name='grp1'
								onChange={()=>{}} data-test-id='grp1'
								options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />);
		expect(radio.find('.sdc-radio-group__legend').length).toEqual(0);
	});

	test('RadioGroup - value changes', () => {
		const radio = mount(<RadioGroup name='grp1' title='Group A'
										onChange={()=>{}} data-test-id='grp1'
										options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />);
		expect(radio.instance().getValue()).toEqual(undefined);
		radio.find('input[value="1"]').simulate('change', { target : { checked: true }});
		expect(radio.instance().getValue()).toEqual('1');
		radio.find('input[value="2"]').simulate('change', { target : { checked: true }});
		expect(radio.instance().getValue()).toEqual('2');
	});
})
