import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Dog from '../Images/carsol.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import image from '../Images/Dog nose.svg'

function Gallery() {
  return (
  <>
  <Container>
    <div className='gallery'>
        <div className='icon'>
            {/* <FontAwesomeIcon className="vector" icon={faDog} /> */}
            {/* <svg  width="16" height="16">
                
            </svg> */}
            <img src={image}  className="vector" alt="dog nose"/>
            <h1>Pets Gallery</h1>
        </div>
        <div className='search'>
            <input type="search"  />
        </div>
        <div className='gel-image'>
            <img src={Dog} className="image" alt="Dog"/>
            <img src={Dog} className="image" alt="Dog"/>
            <img src={Dog} className="image" alt="Dog"/>
        </div>
    </div>
</Container>
  </>
  )
}

export default Gallery