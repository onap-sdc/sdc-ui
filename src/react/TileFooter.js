import React, { Children } from 'react';
import TileFooterCell from './TileFooterCell.js';
const tileFooterCellType = (() => <TileFooterCell />)().type;
const TileFooter = ({ children, align }) => (
    <div className={`sdc-tile-footer ${align === 'center' ? 'centered' : ''}`}>
        {Children.toArray(children).filter(e => e.type === tileFooterCellType)}
    </div>
);

export default TileFooter;
