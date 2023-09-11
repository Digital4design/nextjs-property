import React from 'react'

const Col = ({className, children}) => {
  return (
    <div className={`col px-3 ${className ? className : ''}`}>{children}</div>
  )
}

export default Col