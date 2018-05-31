import React from 'react';
import PropTypes from 'prop-types';
import PopupMenuItem from './PopupMenuItem';

class PopupMenu extends React.Component {
    render() {
        const {
            children = [],
            onMenuItemClick,
            position = {},
            relative
        } = this.props;
        const style = relative ? { left: position.x, top: position.y } : {};

        return (
            <ul
                className={`sdc-menu-list ${relative ? 'relative' : ''}`}
                style={style}>
                {React.Children.toArray(children).map((child, i) =>
                    React.cloneElement(child, {
                        onClick: child.props.onClick || onMenuItemClick,
                        key: i
                    })
                )}
            </ul>
        );
    }
}

PopupMenu.propTypes = {
    relative: PropTypes.bool,
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    onMenuItemClick: PropTypes.func
};

PopupMenu.defaultProps = {
    relative: false
};

export const PopupMenuSeparator = () => <li className="separator" />;

PopupMenu.Separator = PopupMenuSeparator;
PopupMenu.Item = PopupMenuItem;
export default PopupMenu;
