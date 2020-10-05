import React from 'react';
import Title from '../title/Title';

const TitleHover = ({ className = '', text = '', style = {}, side, display = false }) => {
  return (
    <div
      className={`title-hover ${className} ${
        side === 'right' && display ? 'right' : side === 'left' && display ? 'left' : ''
      }`}
      style={style}
    >
      <Title className='title-hover-text' text={text} />
    </div>
  );
};

export default TitleHover;
