import React from 'react';

const Button = ({ className = '', text = '', style = {} }) => (
  <button className={`bold-text ${className}`} style={style}>
    {text}
  </button>
);

export default Button;
