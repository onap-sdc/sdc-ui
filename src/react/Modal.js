import React from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal.js';
import Body from './ModalBody.js';
import Header from './ModalHeader.js';
import Footer from './ModalFooter.js';
import Title from './ModalTitle.js';

export const modalSize = {
    medium: 'md',
    large: 'l',
    extraLarge: 'xl',
    small: 'sm',
    extraSmall: 'xsm'
};

class Modal extends React.Component {
    render() {
        const { size, type, children, show } = this.props;
        return (
            <Portal>
                <div
                    ref={el => {
                        this.modalRef = el;
                    }}>
                    {show && (
                        <div className={`sdc-modal ${modalSize[size]}`}>
                            <div
                                className={`sdc-modal__wrapper sdc-modal-type-${type}`}>
                                {children}
                            </div>
                        </div>
                    )}
                    {show && <div className="modal-background" />}
                </div>
            </Portal>
        );
    }
}

Modal.defaultProps = {
    show: false,
    size: 'medium',
    type: 'info'
};

Modal.propTypes = {
    show: PropTypes.bool,
    size: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string
};

Modal.Body = Body;
Modal.Header = Header;
Modal.Footer = Footer;
Modal.Title = Title;
export default Modal;
