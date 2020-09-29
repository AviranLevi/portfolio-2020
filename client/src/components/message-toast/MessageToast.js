import React, { useContext, useState } from 'react';
import Button from '../button/Button';
import Title from '../title';
import Input from '../input/Input';
import { featuresIcons } from '../../constant/icons';
import { GlobalContext } from '../../context/GlobalState';

const MessageToast = () => {
  const { toggleMessageToast, sendMessage } = useContext(GlobalContext);
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    maxLength: 300,
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const { name, email, message, maxLength } = state;
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

        <div className='message-wrapper center-items'>
          <textarea
            onChange={handleOnChange}
            maxLength={maxLength}
            name='message'
            value={message}
            placeholder='Message...'
          ></textarea>

          <span style={message.length === maxLength ? { color: 'red' } : {}}>
            {message.length} / {maxLength}
          </span>
        </div>

        <div className='message-btns'>
          <Button action={() => sendMessage({ ...state })} text='Send' className='send-btn' />
        </div>
      </div>
    </form>
  );
};

export default MessageToast;