import React from 'react';
import SVGIcon from './SVGIcon.js';

const Button = (props) => {
	let {btnType = 'primary', className, iconName, onClick, disabled, children, ...other} = props;
	return (
		<button
			onClick={onClick}
			className={`sdc-button sdc-button__${btnType} ${className || ''} ${iconName || ''}`}
			disabled={disabled}
			{...other}>
			{
				iconName ?
					<SVGIcon name={iconName} label={children} labelPosition='right' />
				:
					children
			}
		</button>
	);
};

export default Button;
