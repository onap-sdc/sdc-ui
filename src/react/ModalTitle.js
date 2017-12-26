import React from 'react';
import PropTypes from 'prop-types';

const Title = ({children, className}) => (
    <div className={`title react ${className}`} >
        {children}
    </div>
);

Title.PropTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

Title.defaultProps = {
	className: ''
};

export default Title;