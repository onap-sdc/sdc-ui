import React from 'react';

const Button = ({type = 'primary', onClick, children}) => (
  <button onClick={onClick} className={`sdc-button sdc-button__${type}`}>{children}</button>
);

export default Button;