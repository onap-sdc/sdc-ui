import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, className }) => (
    <div className={`title ${className}`}>{children}</div>
);

Title.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Title.defaultProps = {
    className: ''
};

export default Title;
