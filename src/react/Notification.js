import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon';

const Notification = ({
    title,
    message,
    type,
    onClick,
    className,
    dataTestId
}) => {
    return (
        <div
            className={`sdc-notification type-${type} ${className}`}
            data-test-id={dataTestId}
            onClick={onClick}>
            <div className="sdc-notification__icon_container">
                <SVGIcon name="check" className="sdc-notification_svg-icon" />
            </div>
            <div className="sdc-notification__message">
                <div className="sdc-notification__title">{title}</div>
                <div className="sdc-notification__text">{message}</div>
            </div>
        </div>
    );
};

Notification.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string,
    dataTestId: PropTypes.string
};

Notification.defaultProps = {
    className: '',
    type: 'info',
    title: '',
    message: '',
    dataTestId: ''
};

export default Notification;
