import React from 'react';

const TileInfoLine = ({ type, className, children, dataTestId }) => (
    <div
        className={`sdc-tile-info-line ${type || ''} ${className || ''}`}
        data-test-id={dataTestId}>
        {children}
    </div>
);

export default TileInfoLine;
