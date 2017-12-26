import React from 'react';
import PopupMenuItem from './PopupMenuItem';

class PopupMenu extends React.Component {
	render() {
		const {children = [], onMenuItemClick, position = {}, relative} = this.props;
		const style = relative ? {left: position.offsetX, top: position.offsetY} : {};

		return (
			<ul className={`sdc-menu-list ${relative ? 'relative' : 'static'}`} style={style}>
					{children.map((child, i) => React.cloneElement(child,
						{
							onClick: child.props.onClick || onMenuItemClick,
							key: i
						}))}
			</ul>
		);
	}
}

export const PopupMenuSeparator = () => <li className='separator' />;

PopupMenu.Separator = PopupMenuSeparator;
PopupMenu.Item = PopupMenuItem;
export default PopupMenu;
