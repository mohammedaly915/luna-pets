import React from 'react'
import Info from './Info'

function Insurance() {
  return (
    <>
    <div className='insurance'>
        <div className='header'>
            <h1>Pet Care Liability Insurance</h1>
            <p>Insurance coverage for pet business professionals</p>
        </div>
        <div className='body'>
            <Info/>
            <Info/>
            <Info/>
        </div>
    </div>
    </>
  )
}

export default Insurance