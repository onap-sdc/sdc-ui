import React from 'react';
import SVGIcon from './SVGIcon.js';

const Button = (props) => {
	let {btnType = 'default', color = 'primary', onClick, disabled, className, iconName, children, ...other} = props;
	return (
		<button onClick={onClick}
		        className={`sdc-button sdc-button-${btnType} sdc-button__${color} ${className || ''} ${iconName ? 'sdc-button__with-icon' : ''}`}
		        disabled={disabled} {...other}>
			<div className={iconName ? `sdc-button-link-icon` : null}>
				{iconName && <SVGIcon className='sdc-button-icon' name={iconName} />}
				<div className='sdc-button-label'>{children}</div>
			</div>
		</button>
	);
};

export default Button;
