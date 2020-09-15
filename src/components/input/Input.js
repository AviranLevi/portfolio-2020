import React from 'react';

const Input = ({ className = '', title = '', style = {}, action }) => (
  <div className='input-wrapper'>
    <div style={style} className={`input-content bold-text ${className}`}>
      <input onChange={action} />
      <div className='underline'></div>
      <label>{title}</label>
    </div>
  </div>
);

export default Input;
