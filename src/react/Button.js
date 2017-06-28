import React from 'react';
import SVGIcon from './SVGIcon.js';

const Button = ({btnType = 'default', color = 'primary', onClick, disabled, iconName, children}) => (
  <button onClick={onClick} className={`sdc-button sdc-button-${btnType} sdc-button__${color} ${iconName ? 'sdc-button__with-icon' : ''}`} disabled={disabled}>
    {iconName && <SVGIcon name={iconName} />}
    {children}
  </button>
);

export default Button;
