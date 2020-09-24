import React, { useContext, useState } from 'react';
import Button from '../button/Button';
import Title from '../title';
import Input from '../input/Input';
import { featuresIcons } from '../../constant/icons';
import { GlobalContext } from '../../context/GlobalState';

const MessageToast = () => {
  const { toggleMessageToast, toggleThanksToast } = useContext(GlobalContext);
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const { name, email, message } = state;
  return (
    <form className='fade-in message-toast center-items'>
      <div className='message-toast-wrapper center-items'>
        <div onClick={() => toggleMessageToast(false)} className='close-toast'>
          {featuresIcons.close}
        </div>

        <Title className='message-title' text='Contact' />
        <div className='massager-info center-items'>
          <Input onChange={handleOnChange} name='name' title='Name' value={name} />
          <Input onChange={handleOnChange} name='email' title='Email' value={email} />
        </div>

        <textarea
          onChange={handleOnChange}
          className='message'
          maxLength='400'
          name='message'
          value={message}
          placeholder='Message...'
        ></textarea>

        <div className='message-btns'>
          <Button action={() => toggleThanksToast(true)} text='Send' className='send-btn' />
        </div>
      </div>
    </form>
  );
};

export default MessageToast;
