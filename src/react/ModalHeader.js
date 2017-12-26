import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon.js';

const iconMaper = {
	error: 'error',
	info: 'errorCircle',
	alert: 'exclamationTriangleLine'
};

const Header = ({children, onClose, type}) => (
    <div className='sdc-modal__header'>
        {type !== 'custom'
            &&  
                    <SVGIcon iconClassName='sdc-modal__icon' className='sdc-modal__svg-use'  name={iconMaper[type]}/>   
                 
        } 
        {children}
        <SVGIcon className='sdc-modal__close-button' onClick={onClose} name='close'/>        
    </div>
);

Header.PropTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func
};

Header.defaultProps = {
	type: 'info'
};

export default Header;