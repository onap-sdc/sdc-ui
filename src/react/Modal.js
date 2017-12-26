import React from 'react';
import PropTypes from 'prop-types';

import Portal  from './Portal.js';
import Body from './ModalBody.js';
import Header from './ModalHeader.js';
import PopupHeader from './ModalPopupHeader.js';
import Footer from './ModalFooter.js';
import Title from './ModalTitle.js';

export const modalSize = {
	medium: 'md',
	large: 'l',
	extraLarge: 'xl',
	small: 'sm',
	extraSmall: 'xsm'
};


export class Modal extends React.Component {
	render() {       
		const {show, size, type, children} = this.props;
		return (           
            <Portal>
                {
                 show ?    
                    <div>
                        <div className={`sdc-modal ${modalSize[size]}`}>
                            <div className={`sdc-modal__wrapper sdc-modal-type-${type}`}>
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
	size: 'medium',
	type: 'info'
};

Modal.PropTypes = {
	show: PropTypes.bool,
	size: PropTypes.string,
	children: PropTypes.node,
	type: PropTypes.string
};

Modal.Body = Body;
Modal.Header = Header;
Modal.Footer = Footer;
Modal.Title = Title; 
Modal.PopupHeader = PopupHeader;
export default Modal;