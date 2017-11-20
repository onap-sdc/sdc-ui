import React from 'react';
import Radio from '../../src/react/Radio.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

class RadioForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {checked: false};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		this.setState({checked: val});
	}

	getChecked() {
		return this.radio.getChecked();
	}

	render() {
		return (
			<form >
				<Radio ref={(radio)=>{this.radio = radio;}} name='grp1' checked={this.state.checked} label='This is the radio label' value='1' onChange={this.handleChange} />
			</form>
		);
	}
}

describe('Radio', () => {
	test('Radio - unchecked', () => {
		const radio = renderer.create(<Radio name='grp4' label='This is the radio label' value='1' />).toJSON();
		expect(radio).toMatchSnapshot();
	});

	test('Radio - disabled', () => {
		const radio = renderer.create(<Radio name='grp2' disabled={true} label='This is the radio label' value='1' />).toJSON();
		expect(radio).toMatchSnapshot();
	});

	test('Radio - checked state changes', () => {
		const radio = mount(<RadioForm />);
		expect(radio.instance().getChecked()).toEqual(false);
		expect(radio.instance().getChecked()).toEqual(radio.find('input').props().checked);
		radio.find('input').simulate('change', { target : { checked: true }});
		expect(radio.instance().getChecked()).toEqual(true);
		expect(radio.instance().getChecked()).toEqual(radio.find('input').props().checked);
		radio.find('input').simulate('change', { target : { checked: false }});
		expect(radio.instance().getChecked()).toEqual(false);
		expect(radio.instance().getChecked()).toEqual(radio.find('input').props().checked);
	});

	test('Radio - returns its value', () => {
		const radio = mount(<Radio label='This is the radio label' value='myVal' />);
		expect(radio.instance().getValue()).toEqual('myVal');
	});

});
