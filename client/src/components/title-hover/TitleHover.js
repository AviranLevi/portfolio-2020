import React from 'react';
import Title from '../title/Title';

const TitleHover = ({ className = '', text = '', style = {}, side, dispaly = false }) => {
  return (
    <div
      className={`title-hover ${
        side === 'right' && dispaly ? 'right' : side === 'left' && dispaly ? 'left' : ''
      } ${className} `}
      style={style}
    >
      <Title className='title-hover-text' text={text} />
    </div>
  );
};

export default TitleHover;
