import React from 'react';

const Button = ({btnType = 'default', color = 'primary', onClick, disabled, children}) => (
  <button onClick={onClick} className={`sdc-button sdc-button-${btnType} sdc-button__${color}`} disabled={disabled}>{children}</button>
);

export default Button;
