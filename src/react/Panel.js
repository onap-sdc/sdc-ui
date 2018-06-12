import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ className, children }) => (
    <div className={`sdc-panel ${className}`}>{children}</div>
);

Panel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

Panel.defaultProps = {
    className: ''
};
export default Panel;
