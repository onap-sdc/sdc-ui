import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

const Footer = ({onClose, closeButtonText, actionButtonText, actionButtonClick, withButtons, children}) => {
	const closeBtnColor = actionButtonClick ? 'white' : 'primary';
	return (
        <div className='sdc-modal__footer'>
            {children}   
            {                 
                withButtons && <div>
                    {actionButtonClick && 
                        <Button onClick={actionButtonClick}>{actionButtonText}</Button>        
                    }    
                    <Button color={closeBtnColor} onClick={onClose}>{closeButtonText}</Button>        
                </div>
            }
        </div>
	);
};

Footer.PropTypes = {
	onClose: PropTypes.func,
	closeButtonText: PropTypes.string,
	actionButtonText: PropTypes.string,
	actionButtonClick: PropTypes.func,
	withButtons: PropTypes.bool,
	children: PropTypes.node
};

Footer.defaultProps = {
	closeButtonText: 'Close',
	withButtons: true
};

export default Footer;