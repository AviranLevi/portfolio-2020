import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import ProjectProfilePic from '../../assets/images/projects.jpg'
import Title from '../../components/title'
import { featuresIcons } from '../../constant/icons'
import ProjectLink from './project-link'
import imageSourceLoaded from '../../utils/imageSourceLoaded'
import FadeLoader from 'react-spinners/FadeLoader'

const Projects = () => {
  const [loadingImg, setLoadingImage] = useState(true)

  const { state, toggleProjectsCard } = useContext(GlobalContext)
  const { projects, features } = state
  const { openProjectsCard, noTechToDisplay } = features

  const backgroundImageSrc = imageSourceLoaded(ProjectProfilePic)

  useEffect(() => {
    if (backgroundImageSrc) {
      setLoadingImage(false)
    }
  }, [backgroundImageSrc])

  const openCardStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
  }

  return loadingImg ? (
    <FadeLoader size={100} color="#f7fff740" />
  ) : (
    <div className={`projects center-items fade-in ${openProjectsCard && 'expend'}`}>
      <div
        onClick={() => toggleProjectsCard(!openProjectsCard)}
        className={`open-card-btn ${openProjectsCard && 'open-card-btn-expend'}`}
        style={openCardStyle}
      ></div>

      <div className={`card center-items ${openProjectsCard && 'expend-card'} `}>
        <div
          onClick={() => toggleProjectsCard(false)}
          className={`close-card ${openProjectsCard && 'close-card-expend'}`}
        >
          {featuresIcons.close}
        </div>

        <div className={`card-titles center-items ${openProjectsCard && 'expend-titles'}`}>
          <Title className="card-title" text="My Projects" />
        </div>

        <div className={`card-projects center-items ${openProjectsCard && 'expend-card-projects'}`}>
          {projects.map((project, index) => (
            <ProjectLink projcet={project} index={index} />
          ))}
        </div>

        <div className={`card-projects-tech center-items ${openProjectsCard && 'card-projects-tech-expend'}`}>
          {projects.map(
            ({ displayTech, tech }) =>
              displayTech &&
              tech.map((tech, index) => (
                <div className={`tech-icon fade-in`}>
                  <img src={tech} alt={tech + '-' + index} />
                </div>
              ))
          )}

          {noTechToDisplay && (
            <Title
              className={`hover-for-tech-title fade-in ${openProjectsCard && `hover-for-tech-title-expend`}`}
              text="Hover for technologies..."
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
