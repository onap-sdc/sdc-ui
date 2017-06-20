import React from 'react';

const Button = ({type = 'default', color = 'primary', onClick, disabled, children}) => (
  <button onClick={onClick} className={`sdc-button sdc-button-${type} sdc-button__${color}`} disabled={disabled}>{children}</button>
);

export default Button;