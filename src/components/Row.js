import React from 'react'

const Row = ({children, className}) => {
  return (
    <div className={`row flex flex-wrap -mx-3 ${className ? className : ''}`}>{children}</div>
  )
}

export default Row;