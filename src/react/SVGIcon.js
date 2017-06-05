import React, {PropTypes} from 'react';

const SVGIcon = ({name, onClick, label, className, iconClassName, labelClassName, labelPosition, other}) => {
	
	let classes = `svg-icon-wrapper ${className} ${onClick ? 'clickable' : ''} ${labelPosition}`;

	return (
		<div {...other} onClick={onClick} className={classes}>
			<svg className={`svg-icon ${name} ${iconClassName}`}  >
				<use href={ICON_PATH + name + '.svg#' + name + '_icon' }
						xlinkHref={ICON_PATH + name + '.svg#' + name + '_icon' } />
			</svg>
			{label && <span className={`svg-icon-label ${labelClassName}`}>{label}</span>}
		</div>
	);
	
};

SVGIcon.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	labelPosition: PropTypes.string,
	className: PropTypes.string,
	iconClassName: PropTypes.string,
	labelClassName: PropTypes.string
};

SVGIcon.defaultProps = {
	name: '',
	label: '',
	className: '',
	iconClassName: '',
	labelClassName: '',
	labelPosition: 'bottom'
};

export default SVGIcon;