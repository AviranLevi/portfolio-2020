import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import Title from '../../components/title';
import Input from '../../components/input/Input';
import { featuresIcons } from '../../constant/icons';
import { GlobalContext } from '../../context/GlobalState';

const MessageToast = () => {
  const { toggleMessageToast } = useContext(GlobalContext);

  return (
    <form className='message-toast center-items'>
      <div className='message-toast-wrapper center-items'>
        <div onClick={() => toggleMessageToast(false)} className='close-toast'>
          {featuresIcons.close}
        </div>
        <Title className='message-title' text='Contact' />
        <div className='massager-info center-items'>
          <Input title='Name' />
          <Input title='Email' />
        </div>
        <textarea className='message' maxLength='400' placeholder='Message...'></textarea>
        <div className='message-btns'>
          <Button text='Send' className='send-btn' />
        </div>
      </div>
    </form>
  );
};

export default MessageToast;
