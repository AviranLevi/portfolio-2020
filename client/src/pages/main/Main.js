import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Profile from '../../components/profile';
import Projects from '../../components/projects';
import TitleHover from '../../components/title-hover';

const Main = () => {
  const { state } = useContext(GlobalContext);
  const { features } = state;
  const { openMessageToast, openProfileCard, openProjectsCard } = features;
  return (
    <div className='main center-items'>
      <div className={`profile-wrapper ${openMessageToast ? 'active' : ''}`}>
        <div className='profile-hover-left'>
          <TitleHover text='Contact' side='left' dispaly={!openProfileCard} />
        </div>
        <Profile />
      </div>

      <div className={`projects-wrapper ${openMessageToast ? 'active' : ''}`}>
        <div className='projects-hover-right'>
          <TitleHover text='Projects' side='right' dispaly={!openProjectsCard} />
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Main;
