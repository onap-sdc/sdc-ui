import React, { Children } from 'react';
import TileInfoLine from './TileInfoLine.js';
const TileInfoLineType = (() => <TileInfoLine />)().type;

const TileInfo = ({ align, children }) => (
    <div
        className={`sdc-tile-content-info ${
            align === 'center' ? 'centered' : ''
        }`}>
        {Children.toArray(children).filter(e => e.type === TileInfoLineType)}
    </div>
);

export default TileInfo;
