import React, {PropTypes, Children} from 'react';
import SVGIcon from './SVGIcon.js';
import Button from './Button.js';

export const TileInfo = ({alignCenter, children}) => (
	<div className={`sdc-tile-content-info ${alignCenter ? 'centered' : ''}`}>
		{Children.toArray(children).filter(e => e.type === TileInfoLine)}
	</div>
);

export const TileInfoLine = ({type, children}) => (
	<div className={`sdc-tile-info-line ${type || ''}`}>{children}</div>
);

export const TileFooter = ({children, iconText, iconName, onIconClick}) => (
	<div className='sdc-tile-footer-content'>
		<span className='sdc-tile-footer-text'>{children}</span>
		<span>
			{iconText &&
				<span className='sdc-tile-footer-text'>{iconText}</span>
			}
			{iconName &&
				<SVGIcon
					name={iconName}
					onClick={onIconClick} />
			}
		</span>
	</div>
);

export const TileButtonFooter = ({btnType, color, iconName, onClick, children}) => (
	<span className='sdc-tile-button-footer centered'>
		<Button
			btnType={btnType}
			color={color}
			iconName={iconName}
			onClick={onClick}>
			{children}
		</Button>
	</span>
);

const Tile = ({headerText, headerColor, contentIconName, iconColor, className, onClick, children}) => {
	let childrenArr = Children.toArray(children);
	return (
		<div className={`sdc-tile ${className || ''}`} onClick={onClick}>
			<div className={`sdc-tile-header ${headerColor || ''}`}>{headerText}</div>
			<div className='sdc-tile-content'>
				<div className={`sdc-tile-content-icon centered ${iconColor || ''}`}>
					<SVGIcon name={contentIconName}/>
				</div>
				{childrenArr.find(e => e.type === TileInfo)}
			</div>
			<div className='sdc-tile-footer'>
				{childrenArr.find(e => e.type === TileFooter || e.type === TileButtonFooter)}
			</div>
		</div>
	);
};

Tile.propTypes = {
	headerText: PropTypes.string,
	headerColor: PropTypes.string,
	contentIconName: PropTypes.string,
	iconColor: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export default Tile;
