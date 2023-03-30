import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import Dog from '../Images/carsol.png'

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
       <> 
        <h1>title</h1>
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
      </>
    );
  }

function Acordion() {

    return (
        <>
        <div className="ask">
            
            <div className='pics'>
                <img className="image" src={Dog} alt='dog'/>
            </div>
            <div className='acord'>
                <div>
                    <h1>Frequently Asks Questions</h1>
                    <h5>We will provide you with all the information you need, just feel free to ask what you want to know</h5>
                </div>
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Card>
                    <Card.Header>
                    <ContextAwareToggle eventKey="1">
                    <FontAwesomeIcon icon={faPlus} />
                    </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        </div>
        </>
    )
}

export default Acordion