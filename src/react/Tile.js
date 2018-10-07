import React, { Children } from 'react';
import PropTypes from 'prop-types';
import TileInfo from './TileInfo.js';
import TileFooter from './TileFooter.js';
import SVGIcon from './SVGIcon.js';

const Tile = ({
    headerText,
    headerColor,
    iconName,
    iconColor,
    className,
    onClick,
    children,
    dataTestId
}) => {
    let childrenArr = Children.toArray(children);
    return (
        <div
            className={`sdc-tile ${className || ''}`}
            onClick={onClick}
            data-test-id={dataTestId}>
            <div className={`sdc-tile-header ${headerColor || ''}`}>
                {headerText}
            </div>
            <div className="sdc-tile-content">
                <div className={`sdc-tile-content-icon ${iconColor || ''}`}>
                    {iconName && <SVGIcon name={iconName} />}
                </div>
                {childrenArr.find(
                    e =>
                        (e.type && e.type.displayName === 'TileInfo') ||
                        e.type === TileInfo
                )}
            </div>
            {childrenArr.find(
                e =>
                    e.type.displayName === 'TileFooter' || e.type === TileFooter
            )}
        </div>
    );
};

Tile.propTypes = {
    headerText: PropTypes.string,
    headerColor: PropTypes.string,
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    dataTestId: PropTypes.string
};

export default Tile;
