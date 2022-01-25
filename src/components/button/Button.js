import React from 'react';

const Button = ({ className = '', text = '', style = {}, action }) => (
  <button onClick={action} className={`btn bold-text ${className}`} style={style}>
    {text}
  </button>
);

export default Button;
