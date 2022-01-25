import React from 'react'

const SocialLink = ({ index, link }) => {
  const { url, style, icon } = link
  return (
    <a
      key={index + '-' + link}
      className="link center-items"
      href={url}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default SocialLink
