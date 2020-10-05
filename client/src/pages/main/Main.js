import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Profile from '../../components/profile';
import Projects from '../../components/projects';
import TitleHover from '../../components/title-hover';

const Main = () => {
  const { state } = useContext(GlobalContext);
  const { features } = state;
  const { openMessageToast, openProfileCard, openProjectsCard, isLoading } = features;
  return (
    <div className='main center-items'>
      <div className={`profile-wrapper center-items ${openMessageToast || isLoading ? 'active' : ''}`}>
        <div className='profile-hover-left'>
          <TitleHover text='Contact' side='left' display={!openProfileCard} />
        </div>
        <Profile />
      </div>

      <div className={`projects-wrapper center-items ${openMessageToast || isLoading ? 'active' : ''}`}>
        <div className='projects-hover-right'>
          <TitleHover text='Projects' side='right' display={!openProjectsCard} />
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Main;
