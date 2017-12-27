import React from 'react';
import PropTypes from 'prop-types';

import Portal  from './Portal.js';
import Body from './ModalBody.js';
import Header from './ModalHeader.js';
import PopupHeader from './ModalPopupHeader.js';
import Footer from './ModalFooter.js';
import Title from './ModalTitle.js';

const modalSize = {
	medium: 'md',
	large: 'l',
	extraLarge: 'xl',
	small: 'sm',
	extraSmall: 'xsm'
};

class Modal extends React.Component {
	render() {       
		const {show, size, children, onClick} = this.props;
		return (           
            <Portal>
                {
                 show ?    
                    <div>
                        <div className={`sdc-modal ${modalSize[size]}`} onClick={onClick}>
                            <div className='sdc-modal__wrapper '>
                                {children}
                            </div>
                        </div>            
                        <div className='modal-background' />
                    </div>
                : 
                    <div/>
                }            
            </Portal>
		);
	}
}

Modal.defaultProps = {
	show: false,
	size: 'medium'
};

Modal.PropTypes = {
	show: PropTypes.bool,
	size: PropTypes.string,
	children: PropTypes.node
};

Modal.Body = Body;
Modal.Header = Header;
Modal.Footer = Footer;
Modal.Title = Title; 
Modal.PopupHeader = PopupHeader;
export default Modal;