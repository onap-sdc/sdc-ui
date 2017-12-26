import React from 'react';


class PopupMenuItem extends React.Component {
	render() {
		const {itemId, value, onClick, selected, disabled} = this.props;
		const additionalProps = selected ? 'selected' : disabled ? 'disabled' : '';
		return (
			<li
			    className={`sdc-menu-item ${additionalProps}`}
			    onClick={event => {
				    event.stopPropagation();
			        onClick && !disabled && onClick(itemId);
			    }}>
				{value}
			</li>
		);
	}
}

export default PopupMenuItem;
