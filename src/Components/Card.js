import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Dog from '../Images/carsol.png'

function Cardt() {
  return (
    <><Col>
        <Card className="card">
            <Card.Img variant="top" className='img' src={Dog} />
            <Card.Body className='body'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
    </>
  )
}

export default Cardt