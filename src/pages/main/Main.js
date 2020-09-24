import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Profile from '../../components/profile';
import Projects from '../../components/projects';
import MessageToast from '../../components/message-toast';
import TitleHover from '../../components/title-hover';
import Toast from '../../components/toast';

const Main = () => {
  const { state } = useContext(GlobalContext);
  const { features } = state;
  const { openMessageToast, openProfileCard, openProjectsCard, thanksToast } = features;
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

      {openMessageToast ? <MessageToast /> : null}
      {thanksToast ? <Toast title='Thanks! 💓' text=' I will get back to you as soon as I can! 😊' /> : null}
    </div>
  );
};

export default Main;
