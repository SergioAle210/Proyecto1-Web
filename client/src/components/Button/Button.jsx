import PropTypes from 'prop-types'
import React from 'react'
import './Button.css'

const Button = ({ text, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>)
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button
