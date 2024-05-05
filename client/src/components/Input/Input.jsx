import { useState } from 'react'
import PropTypes from 'prop-types'

import './Input.css'

const Input = ({ label, placeholder, value, type, onChange }) => {
  const [ eyeClosed, setEyeClosed ] = useState(true) 

  return (
    <label className="input-container">
      <span className="label">{label}</span>
      <input
        type={!eyeClosed && type === 'password' ? 'text' : type }
        onChange={({ target: { value }}) => onChange(value)}
        className="input"
        value={value || ''}
        placeholder={placeholder}
        maxLength={type === 'password' ? 16 : null}
      />
      {
        type === 'password' ? (
          <div
            className={`eye ${eyeClosed ? 'closed' : 'open'}`}
            onClick={() => setEyeClosed((oldEye) => !oldEye)}
          >
            👁
          </div>
        ) : null 
      }
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Input