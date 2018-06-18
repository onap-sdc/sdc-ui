import React from 'react';

const TileFooterCell = ({ className, children, dataTestId }) => (
    <span
        className={`sdc-tile-footer-cell ${className || ''}`}
        data-test-id={dataTestId}>
        {children}
    </span>
);

export default TileFooterCell;
