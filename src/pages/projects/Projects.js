import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ProfilePic from '../../assets/images/ELD06141.jpg';
import Title from '../../components/title';

const Projects = () => {
  const { state, toggleProjectsCard } = useContext(GlobalContext);
  const { projects, features } = state;
  const { openProjectsCard, openMessageToast } = features;
  return (
    <div className={`projects center-items ${openProjectsCard ? 'expend' : ''} ${openMessageToast ? 'active' : ''} `}>
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
          {projects.map((project) => (
            <div className='project center-items'>
              <Title text={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
