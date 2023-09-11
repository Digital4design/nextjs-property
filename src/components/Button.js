import React from 'react'

const Button = ({type, name, text, className}) => {
  return (
    <button type={type} name={name} className={`${className}`}>{text}</button>
  )
}

export default Button