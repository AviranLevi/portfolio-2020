import React from 'react';
import Title from '../title';

const Toast = ({ className = '', title = '', text = '', style = {} }) => (
  <div className={`toast ${className}`} style={style}>
    <div className='toast-wrapper center-items'>
      <Title className='toast-title' text={title} />
      <div className='toast-message'>{text}</div>
    </div>
  </div>
);

export default Toast;
