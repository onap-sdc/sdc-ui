import React from 'react';
import PopupMenuItem from '../../src/react/PopupMenuItem.js';
import PopupMenu from '../../src/react/PopupMenu.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('PopupMenuItem', () => {
	test('check selected', () => {
		const menuItem = renderer.create(<PopupMenuItem itemId='1' value='item 1' selected/>).toJSON();
		expect(menuItem).toMatchSnapshot();
	});

	test('check disabled', () => {
		const menuItem = renderer.create(<PopupMenuItem itemId='2' value='item 2' disabled/>).toJSON();
		expect(menuItem).toMatchSnapshot();
	});

	test('check parent onclick invoked by child', () => {
		const mockFunc = jest.fn();
		const menu = mount(
			<PopupMenu onMenuItemClick={mockFunc}>
				<PopupMenuItem itemId='1' value='item 1'/>
			</PopupMenu>
		);
		expect(menu.find('li')).toHaveLength(1);
		menu.find('li').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});

	test('check custom onclick invoked by child', () => {
		const mockParentFunc = jest.fn();
		const mockChildFunc = jest.fn();
		const menu = mount(
			<PopupMenu onMenuItemClick={mockParentFunc}>
				<PopupMenuItem itemId='1' value='item 1' onClick={mockChildFunc}/>
			</PopupMenu>
		);
		expect(menu.find('li')).toHaveLength(1);
		menu.find('li').simulate('click');
		expect(mockChildFunc).toHaveBeenCalled();
		expect(mockParentFunc).not.toHaveBeenCalled();
	});

	test('check no click handler if item is disabled', () => {
		const mockFunc = jest.fn();
		const menu = mount(
			<PopupMenu onMenuItemClick={mockFunc}>
				<PopupMenuItem itemId='1' value='item 1' disabled/>
			</PopupMenu>
		);
		expect(menu.find('li')).toHaveLength(1);
		menu.find('li').simulate('click');
		expect(mockFunc).not.toHaveBeenCalled();
	});
});