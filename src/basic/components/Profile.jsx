import React from 'react'
import Avarta from './Avarta'

export default function Profile({img, name, title, newChk}) {
  return (
    <div className='profile'>
        <Avarta newChk={newChk} img={img}></Avarta>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

