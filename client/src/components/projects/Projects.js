import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ProfilePic from '../../assets/images/projects.jpg';
import Title from '../../components/title';

const Projects = () => {
  const { state, toggleProjectsCard, displayProjectTech } = useContext(GlobalContext);
  const { projects, features } = state;
  const { openProjectsCard } = features;

  return (
    <div className={`projects center-items ${openProjectsCard ? 'expend' : ''}  `}>
      <div
        onClick={() => toggleProjectsCard(!openProjectsCard)}
        className={`open-card-btn ${openProjectsCard ? 'open-card-btn-expend' : ''}`}
        style={{ backgroundImage: `url(${ProfilePic})` }}
      ></div>

      <div className={`card center-items ${openProjectsCard ? 'expend-card' : ''} `}>
        <div className={`card-titles center-items ${openProjectsCard ? 'expend-titles' : ''}`}>
          <Title className='card-title' text='My Projects' />
        </div>

        <div className={`card-projects center-items ${openProjectsCard ? 'expend-card-projects' : ''}`}>
          {projects.map((project, index) => (
            <a
              onMouseOver={() => displayProjectTech(index, true)}
              onMouseLeave={() => displayProjectTech(index, false)}
              key={project.title + '-' + index}
              className='project center-items'
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Title text={project.title} />
            </a>
          ))}
        </div>

        <div className={`card-projects-tech center-items ${openProjectsCard ? 'card-projects-tech-expend' : ''}`}>
          {projects.map((project) =>
            project.displayTech
              ? project.tech.map((tech, index) => (
                  <div className={`tech-icon fade-in`}>
                    <img src={tech} alt={tech + '-' + index} />
                  </div>
                ))
              : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
