import React, {Children} from 'react';

const TileFooter = ({children, align}) => (
	<div className={`sdc-tile-footer ${align === 'center' ? 'centered' : ''}`}>
		{Children.toArray(children).filter(e => e.type && e.type.name === 'TileFooterCell')}
	</div>
);

export default TileFooter;
