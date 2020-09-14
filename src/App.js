import React from 'react';
import Profile from './pages/profile';
import Projects from './pages/projects';

function App() {
  return (
    <div className='app center-items'>
      <div className='container center-items'>
        <Profile />
        <Projects />
      </div>
    </div>
  );
}

export default App;
