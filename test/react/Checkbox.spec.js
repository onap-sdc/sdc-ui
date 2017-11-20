import React from 'react';
import Checkbox from '../../src/react/Checkbox.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

class CheckboxForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {checked: false};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		this.setState({checked: val});
	}

	getChecked() {
		return this.checkbox.getChecked();
	}

	render() {
		return (
			<form >
				<Checkbox ref={(checkbox)=>{this.checkbox = checkbox;}} checked={this.state.checked} onChange={this.handleChange} label='This is the checkbox label' />
			</form>
		);
	}
}

describe('Checkbox', () => {
	test('Checkbox - unchecked', () => {
		const checkbox = renderer.create(<Checkbox label='This is the checkbox label'/>).toJSON();
		expect(checkbox).toMatchSnapshot();
	});

	test('Checkbox - disabled', () => {
		const checkbox = renderer.create(<Checkbox disabled={true} label='This is the checkbox label' />).toJSON();
		expect(checkbox).toMatchSnapshot();
	});

	test('Checkbox - checked state changes', () => {
		const checkbox = mount(<CheckboxForm  />);
		expect(checkbox.instance().getChecked()).toEqual(false);
		expect(checkbox.instance().getChecked()).toEqual(checkbox.find('input').props().checked);
		checkbox.find('input').simulate('change', { target : { checked: true }});
		expect(checkbox.instance().getChecked()).toEqual(checkbox.find('input').props().checked);
		expect(checkbox.instance().getChecked()).toEqual(true);
		checkbox.find('input').simulate('change', { target : { checked: false }});
		expect(checkbox.instance().getChecked()).toEqual(false);
		expect(checkbox.instance().getChecked()).toEqual(checkbox.find('input').props().checked);
	});

	test('Checkbox - returns its value', () => {
		const checkbox = mount(<Checkbox label='This is the checkbox label' value='myVal' />);
		expect(checkbox.instance().getValue()).toEqual('myVal');
	});

});
