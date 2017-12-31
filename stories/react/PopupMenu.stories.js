
import React from 'react';
import Examples from './utils/Examples.js';
import PopupMenu from '../../src/react/PopupMenu.js';
import PopupMenuItem from '../../src/react/PopupMenuItem.js';
import HTMLPopupMenu from '../../components/menu/popup-menu.html';
import HTMLPopupMenuRelative from '../../components/menu/relative-popup-menu.html';

let examples = {
	'Basic popup menu (static)': {
		jsx: <PopupMenu onMenuItemClick={() => {}}>
				<PopupMenuItem key='1' itemId='1' value='item 1 (selected)' selected/>
				<PopupMenuItem key='2' itemId='2' value='item 2' disabled/>
				<PopupMenu.Separator />
				<PopupMenuItem key='3' itemId='3' value='item 3'/>
				<PopupMenuItem key='4' itemId='4' value='custom action' onClick={function customCallback() {}}/>
			</PopupMenu>,
		html: HTMLPopupMenu
	},
	'Basic popup menu (relative)': {
		jsx: <div className='sdc-popup-menu'>
				<PopupMenu onMenuItemClick={()=> {}} position={{x: 10, y: 10}} relative>
					<PopupMenuItem itemId='1' value='item 1 (selected)' selected/>
					<PopupMenuItem itemId='2' value='item 2' disabled/>
					<PopupMenu.Separator />
					<PopupMenuItem itemId='3' value='item 3' onClick={function customCallback() {}}/>
				</PopupMenu>
			</div>,
		html: HTMLPopupMenuRelative
	}
};

const PopupMenuReactComponent = () => (
	<Examples examples={examples} />
);

export default PopupMenuReactComponent;