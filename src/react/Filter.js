import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ className, children }) => (
    <div className={`sdc-filter ${className}`}>
        {children}
    </div>
);

Filter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

Filter.defaultProps = {
    className: ''
};
export default Filter;