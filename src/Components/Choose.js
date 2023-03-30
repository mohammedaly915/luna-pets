import React from 'react'
import Dog from '../Images/carsol.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
function Choose() {
  return (<>
    <div className="choose">
        <div className='pics'>
          <div className='image'>
            <img className="image1 size" src={Dog} alt='dog'/>
          </div>
          <div className="image ">
            <img className="image2 size" src={Dog} alt='dog'/>
          </div>
        </div>
        <div className='Us'>
            <div className='head'>
                <h1>Why You Choose Us?</h1>
                <FontAwesomeIcon icon={faDog} />
            </div>
            <div className='body' >
                <div className='part'>
                  <h2>Care Advices</h2>
                  <p>Far for away, behind the word moments, far from the countries Vokalia </p>
                </div>
                <div className='part'>
                  <h2>Care Advices</h2>
                  <p>Far for away, behind the word moments, far from the countries Vokalia </p>
                </div>
                <div className='part'>
                  <h2>Care Advices</h2>
                  <p>Far for away, behind the word moments, far from the countries Vokalia </p>
                </div>
                <div className='part'>
                  <h2>Care Advices</h2>
                  <p>Far for away, behind the word moments, far from the countries Vokalia </p>
                </div>
                
            </div>
        </div>
    </div>

  </>
  )
}

export default Choose