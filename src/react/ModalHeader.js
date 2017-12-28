import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon.js';

const Header = ({children, onClose}) => (
    <div className='sdc-modal__header'>
        {children}
        <SVGIcon className='close-button' onClick={onClose} name='close'/>        
    </div>
);

Header.PropTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func
};

export default Header;