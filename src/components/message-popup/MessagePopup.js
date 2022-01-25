import React, { useContext, useState } from 'react'
import Button from '../button/Button'
import Title from '../title'
import Input from '../input/Input'
import { featuresIcons } from '../../constant/icons'
import { GlobalContext } from '../../context/GlobalState'

const MessagePopup = () => {
  const { state, toggleMessageToast, sendMessage } = useContext(GlobalContext)
  const [user, setUser] = useState({
    name: '',
    email: '',
    text: '',
    maxLength: 300,
  })

  const handleOnChange = (e) => {
    const { value } = e.target
    const { name } = e.target
    setUser({ ...user, [name]: value })
  }

  const { name, email, text, maxLength } = user
  const { nameError, emailError, textError } = state.errors

  return (
    <div className="message-toast center-items fade-in">
      <div className="message-toast-wrapper center-items">
        <div onClick={() => toggleMessageToast(false)} className="close-toast">
          {featuresIcons.close}
        </div>

        <Title className="message-title" text="Contact" />
        <div className="massage-user-info center-items">
          <Input onChange={handleOnChange} name="name" title="Name" value={name} error={nameError} />
          <Input onChange={handleOnChange} name="email" title="Email" value={email} error={emailError} />
        </div>

        <div className="message-wrapper center-items">
          <textarea
            onChange={handleOnChange}
            maxLength={maxLength}
            name="text"
            value={text}
            placeholder="Message..."
          ></textarea>

          <div className="text-info center-items">
            {textError && <span className="text-error">*Message is required...</span>}
            <span className="char-length" style={text.length === maxLength ? { color: 'red' } : {}}>
              {text.length} / {maxLength}
            </span>
          </div>
        </div>

        <div className="message-btns">
          <Button action={() => sendMessage({ ...user })} text="Send" className="send-btn" />
        </div>
      </div>
    </div>
  )
}

export default MessagePopup
