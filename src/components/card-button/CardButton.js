import React from 'react';

const CardButton = ({ imgSrc = '', action, className = '' }) => (
  <div onClick={action} className={`open-card-btn ${className}`} style={{ backgroundImage: `url(${imgSrc})` }}></div>
);

export default CardButton;
