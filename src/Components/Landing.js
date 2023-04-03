import React from 'react'
import { Button } from 'react-bootstrap'
import Dog from '../Images/carsol.png'
import Menus from './Menus'
// import Menu from './Menu'
function Landing() {
  return (
    <>
        <div className='landing'>
            <div className='top'>
              <span>You‘ll Love</span>
              <h1>Highest Quality Care For Pets</h1>
              <Button className="btn">learn more</Button>
            </div>
            <div className="back">  
                <img src={Dog} className="imgo" alt="Dog"  />
            </div>
            <Menus/>
            
        </div>
    </>
  )
}

export default Landing