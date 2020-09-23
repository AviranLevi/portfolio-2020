import React, { useContext } from 'react';
import Profile from './pages/profile';
import Projects from './pages/projects';
import MessageToast from './pages/message-toast';
import { GlobalContext } from './context/GlobalState';
import TitleHover from './components/title-hover';

function App() {
  const { state } = useContext(GlobalContext);
  const { features } = state;
  const { openMessageToast, openProfileCard, openProjectsCard } = features;
  return (
    <div className='app center-items'>
      <div className='container center-items'>
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
      </div>
    </div>
  );
}

export default App;
