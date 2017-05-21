import React from 'react';

const Button = ({type = 'default', color = 'primary', onClick, disabled, children, michal = ''}) => (
  <button disabled={disabled} onClick={onClick} className={`sdc-button sdc-button-${type} sdc-button__${color} ${michal}`}>{children}</button>
);

const ButtonSet = ({useSet = false, type, color, onClick, disabled, children}) => {
  if (useSet) {
    return (
      <p>
        <Button disabled={disabled} onClick={onClick} type={type} color={color} children={children} />
        <Button disabled={disabled} onClick={onClick} type={type} color={color} michal='michal-one' children={children} />
        <Button disabled={disabled} onClick={onClick} type={type} color={color} michal='michal-two' children={children} />
      </p>
    )
  } else {
    return <Button disabled={disabled} onClick={onClick} type={type} color={color}>{children}</Button>
  }
};

export default ButtonSet;