import React from 'react'

const Input = ({ className = '', value = '', title = '', style = {}, onChange, name = '', error = false }) => (
  <div className="input-wrapper">
    <div style={style} className={`input-content bold-text ${className}`}>
      <input name={name} placeholder=" " value={value} onChange={onChange} required />
      <div className="underline"></div>
      <label>{title}</label>
      {error && <span className="input-error">{`*${title} is required`}</span>}
    </div>
  </div>
)

export default Input
