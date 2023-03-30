import React from 'react'
import Dog from '../Images/carsol.png'
function Info() {
  return (
    <div className='info'>
        <div className='head'>
            <img alt='dog' src={Dog}/>
        </div>
        <div className='content'>
            <div className='head'>Pet Sitter Insurance</div>
            <div className='body'>As a pet sitter, your passion is taking 
                    care of animals. At Pet Care Insurance 
                    (PCI), our passion is helping to protect 
                    your business through high-quality pet 
                    sitting insurance. In about 10 minutes 
                    you can have an affordable insurance policy
            </div>
        </div>
    </div>
  )
}

export default Info