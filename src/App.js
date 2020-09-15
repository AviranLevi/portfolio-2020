import React, { useContext } from 'react';
import Profile from './pages/profile';
import Projects from './pages/projects';
import MessageToast from './pages/message-toast';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { state } = useContext(GlobalContext);
  const { features } = state;
  return (
    <div className='app center-items'>
      <div className='container center-items'>
        <Profile />
        <Projects />

        {features.openMessageToast ? <MessageToast /> : null}
      </div>
    </div>
  );
}

export default App;
