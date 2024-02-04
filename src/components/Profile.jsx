import React from 'react'

export default function Profile({img, name, title}) {
  return (
    <div className='profile'>
        <img 
            className='photo'
            src={img} 
            alt="avater" 
        />
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

