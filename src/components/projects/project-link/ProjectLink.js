import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import Title from '../../title'

const ProjectLink = ({ projcet, index }) => {
  const { displayProjectTech } = useContext(GlobalContext)
  const { title, url } = projcet
  return (
    <a
      onMouseOver={() => displayProjectTech(index, true)}
      onMouseLeave={() => displayProjectTech(index, false)}
      key={title + '-' + index}
      className="project center-items"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Title text={title} />
    </a>
  )
}

export default ProjectLink
