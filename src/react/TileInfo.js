import React, { Children } from 'react';
import TileInfoLine from './TileInfoLine.js';

const TileInfo = ({ align, children }) => (
    <div
        className={`sdc-tile-content-info ${
            align === 'center' ? 'centered' : ''
        }`}>
        {Children.toArray(children).filter(
            e =>
                (e.type && e.type.displayName === 'TileInfoLine') ||
                e.type === TileInfoLine
        )}
    </div>
);

export default TileInfo;
