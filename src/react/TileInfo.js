import React, {Children} from 'react';

const TileInfo = ({align, children}) => (
	<div className={`sdc-tile-content-info ${align === 'center' ? 'centered' : ''}`}>
		{Children.toArray(children).filter(e => e.type && e.type.name === 'TileInfoLine')}
	</div>
);

export default TileInfo;
