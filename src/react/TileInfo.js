import React, { Children } from 'react';
import TileInfoLine from './TileInfoLine.js';
const LineType = (() => <TileInfoLine />)().type;

const TileInfo = ({ align, children }) => (
    <div
        className={`sdc-tile-content-info ${
            align === 'center' ? 'centered' : ''
        }`}>
        {Children.toArray(children).filter(e => e.type === LineType)}
    </div>
);

export default TileInfo;
