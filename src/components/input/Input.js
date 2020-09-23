import React from 'react';

const Input = ({ className = '', value = '', title = '', style = {}, onChange, name = '' }) => (
  <div className='input-wrapper'>
    <div style={style} className={`input-content bold-text ${className}`}>
      <input name={name} value={value} onChange={onChange} />
      <div className='underline'></div>
      <label>{title}</label>
    </div>
  </div>
);

export default Input;
