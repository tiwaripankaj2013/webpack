import React from 'react';
import './User.css';
export const User = ({name}) => {
  return (
    <div>
        <p className='text-pink'>My name is {name} </p>
    </div>
  )
}
