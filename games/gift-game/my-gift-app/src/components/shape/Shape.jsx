import React from 'react'
import './_Shape.css'

const Shape = ({type}) => {
  return (
    <div className={`shape ${type}`}></div>
  )
}

export default Shape