import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon.js';

const iconMaper = {
    error: 'error',
    info: 'errorCircle',
    alert: 'exclamationTriangleLine'
};

const headerTypes = {
    error: 'sdc-error__header',
    info: 'sdc-info__header',
    alert: 'sdc-alert__header',
    custom: 'sdc-custom__header'
};

const Header = ({ children, onClose, type }) => (
    <div className={headerTypes[type] + ' sdc-modal__header'}>
        {type !== 'custom' && (
            <SVGIcon
                iconClassName="sdc-modal__icon"
                className="sdc-modal__svg-use"
                name={iconMaper[type]}
            />
        )}
        {children}
        <SVGIcon
            iconClassName="sdc-modal__close-button-svg"
            className="sdc-modal__close-button"
            onClick={onClose}
            name="close"
        />
    </div>
);

Header.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func
};

Header.defaultProps = {
    type: 'info'
};

export default Header;
