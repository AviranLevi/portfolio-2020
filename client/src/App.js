import React, { useContext } from 'react';
import MessageToast from './components/message-toast';
import Spinner from './components/spinner';
import Toast from './components/toast';
import { GlobalContext } from './context/GlobalState';
import Main from './pages/main';

function App() {
  const { state } = useContext(GlobalContext);
  const { openMessageToast, thanksToast, isLoading } = state.features;
  const { errorToast } = state.errors;

  return (
    <div className='app center-items'>
      <Main />
      {openMessageToast ? <MessageToast /> : null}
      {thanksToast ? <Toast title='Thanks! 💓' text=' I will get back to you as soon as I can! 😊' /> : null}
      {errorToast ? <Toast title='ERROR' text=' Oh no 😳, Something was wrong!, please try again later' /> : null}
      {isLoading ? <Spinner /> : null}
    </div>
  );
}

export default App;
