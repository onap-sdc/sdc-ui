import React from 'react';
import RadioGroup from '../../src/react/RadioGroup.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

class RadioGroupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: undefined};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		this.setState({value: val});
	}

	getValue() {
		return this.grp.getValue();
	}

	render() {
		return (
			<form >
				<RadioGroup name='grp1' title='Group A' value={this.state.value} ref={(grp) => { this.grp = grp;}} onChange={this.handleChange} data-test-id='grp1'
					options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />
			</form>
		);
	}
}

describe('RadioGroup', () => {
	test('RadioGroup - basic rendering', () => {
		const radio = renderer.create(<RadioGroup name='grp1' defaultValue='2' value='1' title='Group A'
			onChange={()=>{}} data-test-id='grp1'
			options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />).toJSON();
		expect(radio).toMatchSnapshot();
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
		const radio = mount(<RadioGroupForm  />);
		expect(radio.instance().getValue()).toEqual(undefined);
		radio.find('input[value="1"]').simulate('change', { target : { checked: true }});
		expect(radio.instance().getValue()).toEqual('1');
		radio.find('input[value="2"]').simulate('change', { target : { checked: true }});
		expect(radio.instance().getValue()).toEqual('2');
	});
});
