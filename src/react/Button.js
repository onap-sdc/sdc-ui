import React from 'react';

const Button = ({type = 'default', color = 'primary', onClick, children}) => (
  <button onClick={onClick} className={`sdc-button sdc-button-${type} sdc-button__${color}`}>{children}</button>
);

export default Button;