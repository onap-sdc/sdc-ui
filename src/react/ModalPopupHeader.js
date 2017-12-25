import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from './SVGIcon.js';

const iconMaper = {
	error: 'error',
	info: 'errorCircle',
	alert: 'exclamationTriangleLine'
};

const Header = ({children, onClose, modalType}) => (
    <div className={`sdc-modal__header popup-header sdc-modal-type-${modalType}`}>
        <SVGIcon className={`popup-icon ${modalType}`} name={iconMaper[modalType]}/>        
            {children}
        <SVGIcon className='close-button popup' onClick={onClose} name='close'/>        
    </div>
);

Header.PropTypes = {
	modalType: PropTypes.string,
	onClose: PropTypes.func,
	children: PropTypes.node
};

export default Header;