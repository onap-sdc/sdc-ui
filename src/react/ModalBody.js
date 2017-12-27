import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({children, className}) => (
    <div className={`sdc-modal__body ${className}`} >
        {children}
    </div>
);

ModalBody.PropTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

export default ModalBody;