import React from 'react'
// import React, { Component } from 'react'
// above used for class
import loading from './circle-3.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="" />
    </div>
  )
}

export default Spinner
