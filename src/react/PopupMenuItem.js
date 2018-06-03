import React from 'react';
import PropTypes from 'prop-types';

class PopupMenuItem extends React.Component {
    render() {
        const { itemId, value, onClick, selected, disabled } = this.props;
        const additionalClasses = selected
            ? 'selected'
            : disabled
                ? 'disabled'
                : '';
        return (
            <li
                className={`sdc-menu-item ${additionalClasses}`}
                onClick={event => {
                    event.stopPropagation();
                    if (onClick && !disabled) {
                        onClick(itemId);
                    }
                }}>
                {value}
            </li>
        );
    }
}

PopupMenuItem.propTypes = {
    itemId: PropTypes.any,
    value: PropTypes.any,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

PopupMenuItem.defaultProps = {
    selected: false,
    disabled: false
};

export default PopupMenuItem;
