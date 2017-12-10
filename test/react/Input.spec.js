import React from 'react';
import Input from '../../src/react/Input.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

class InputForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'Initial'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		this.setState({value: val});
	}

	getValue() {
		return this.input.getValue();
	}

	render() {
		return (
			<form >
				<Input ref={(input)=>{this.input = input;}} value={this.state.value} name='testinput' onChange={this.handleChange} />
			</form>
		);
	}
}

describe('Input', () => {
	test('Input - default', () => {
		const input = renderer.create(<Input label='label for input' name='clickme' type='text'/>).toJSON();
		expect(input).toMatchSnapshot();
	});

	test('Input - required', () => {
		const input = renderer.create(<Input required label='label for input' name='clickme' type='text'/>).toJSON();
		expect(input).toMatchSnapshot();
	});

	test('Input - number', () => {
		const input = renderer.create(<Input  label='label for input' name='clickme' type='number'/>).toJSON();
		expect(input).toMatchSnapshot();
	});

	test('Input - readonly', () => {
		const input = renderer.create(<Input  label='label for input' name='clickme' type='text' readOnly/>).toJSON();
		expect(input).toMatchSnapshot();
	});

	test('Input - placeholder', () => {
		const input = renderer.create(<Input  label='label for input' name='clickme' type='text' placeholder='hint'/>).toJSON();
		expect(input).toMatchSnapshot();
	});

	test('Input - error', () => {
		const input = renderer.create(<Input  label='label for input' name='clickme' type='text' errorMessage='this is an error'/>).toJSON();
		expect(input).toMatchSnapshot();
	});

	test('Input - checked state value changes', () => {
		const input = mount(<InputForm />);
		expect(input.instance().getValue()).toEqual('Initial');
		input.find('input').simulate('change', { target : { value: 'Changed' }});
		expect(input.instance().getValue()).toEqual('Changed');
		expect(input.find('input').prop('value')).toEqual('Changed');
	});
});
