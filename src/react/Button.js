import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon.js';

const Button = ({
    btnType,
    size,
    className,
    iconName,
    onClick,
    disabled,
    children,
    ...other
}) => (
    <button
        onClick={onClick}
        className={`sdc-button sdc-button__${btnType} ${size &&
            `btn-${size}`} ${className} ${iconName}`}
        disabled={disabled}
        {...other}>
        {iconName ? (
            <SVGIcon name={iconName} label={children} labelPosition="right" />
        ) : (
            children
        )}
    </button>
);

Button.propTypes = {
    btnType: PropTypes.string,
    size: PropTypes.oneOf([
        '',
        'default',
        'x-small',
        'small',
        'medium',
        'large'
    ]),
    className: PropTypes.string,
    iconName: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    btnType: 'primary',
    size: '',
    className: '',
    iconName: '',
    disabled: false
};

export default Button;
