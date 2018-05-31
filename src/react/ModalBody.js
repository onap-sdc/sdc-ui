import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({ children, className }) => (
    <div className={`sdc-modal__content ${className}`}>{children}</div>
);

ModalBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ModalBody.defaultProps = {
    className: ''
};

export default ModalBody;
