import React from 'react'
import Title from '../title/Title'

const TitleHover = ({ className = '', text = '', style = {}, side, display = false }) => {
  const right = side === 'right' && display && 'right'
  const left = side === 'left' && display && 'left'
  return (
    <div className={`title-hover ${className} ${right || left}`} style={style}>
      <Title className="title-hover-text" text={text} />
    </div>
  )
}

export default TitleHover
