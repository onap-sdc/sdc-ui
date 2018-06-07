import React from 'react';
import PopupMenu from '../../src/react/PopupMenu.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

class MyPopupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {position: {}};
	}

	handleClick(newPos) {
		this.setState({position: newPos});
	}

	getPosition() {
		return this.state.position;
	}

	render() {
		return (
			<form onClick={event => this.handleClick({
				x: event.pageX - event.target.offsetLeft,
				y: event.pageY - event.target.offsetTop
			})}>
				<PopupMenu position={this.state.position} relative onMenuItemClick={() => {}} />
			</form>
		);
	}
}

describe('PopupMenu', () => {
	test('check static menu rendered', () => {
		const menu = renderer.create(<PopupMenu onMenuItemClick={() => {}}/>).toJSON();
		expect(menu).toMatchSnapshot();
	});

	test('check relative menu rendered', () => {
		const menu = renderer.create(<PopupMenu onMenuItemClick={()=> {}} position={{x: 10, y: 10}} relative/>).toJSON();
		expect(menu).toMatchSnapshot();
	});

	test('check separator rendered', () => {
		const separator = renderer.create(<PopupMenu.Separator/>).toJSON();
		expect(separator).toMatchSnapshot();
	});

	test('check position changed', () => {
		const menuForm = mount(<MyPopupForm />);
		const position = menuForm.instance().getPosition();
		expect(position).toEqual({});
		expect(position).toEqual(menuForm.find('ul').props().style);
		menuForm.find('form').simulate('click', {
			target: {offsetLeft: 10, offsetTop: 20},
			pageX: 30, pageY: 50
		});
		const newPosition = menuForm.instance().getPosition();
		expect(newPosition).toEqual({x:20, y:30});
		expect({left: newPosition.x, top: newPosition.y}).toEqual(menuForm.find('ul').props().style);
	});
});