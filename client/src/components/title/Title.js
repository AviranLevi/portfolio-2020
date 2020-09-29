import React from 'react';

const Title = ({ className = '', text = '', style = {} }) => (
  <h1 className={`bold-text ${className}`} style={style}>
    {text}
  </h1>
);

export default Title;
