import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import Dog from '../Images/carsol.png'
import cat from '../Images/Rectangle 24.png'



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
    const acordionData=[{header:"How to train your dog?",content:""},
                        {header:"How to manage your pets?",content:"Just like people, pets need food that meets their specific nutritional needs. Dog foods are designed to meet a dog’s nutritional needs and cat foods are designed to meet a cat’s nutritional needs. Importantly, their dietary needs are very different. Puppies require different food from senior dogs. Pet’s with health issues may require special diets. Table scraps are typically not good for dogs and cats because many of the foods we eat, such as salt, garlic, and onions are bad for your pet’s health and can make them sick or even be fatal. Don’t forget to give pets the right amount of food, too! Overfeeding your pet or giving him too many treats could lead to obesity, which could consequently trigger more health problems such as heart disease, renal problems, and more. Weigh your options when it comes to pet food to avoid these kinds of illnesses — and if you don’t exactly know what foods are best for your pet, it’s a great idea to ask the opinion of your vet!"},
                        {header:"How to get best bets?",content:"Getting good pets in Pet Simulator X helps enhance the experience of what is already quite an interesting game. Having the best pets in the game will allow you to progress further more quickly, while also enabling you to earn bigger amounts of money and rewards. However, as you read these lines, you’re probably wondering, how can you get your hands on these pets in the first place? Well, the answer is simple, and that’s exactly what we will explain in this guide, so keep reading to learn how to acquire good pets in Pet Sim X."},
                        {header:"What is the pest food for your pet?",content:"Most people feed their dogs dry kibble or canned wet food. These processed foods might not be appealing to us, but they contain all of the nutrients dogs need to stay healthy. Quality commercial dog foods are highly regulated and have undergone rigorous testing by veterinary specialists. So what exactly is in these dog foods? Dogs, unlike cats, are not strict carnivores. While meat makes up the majority of their diet, domestic dogs can also derive nutrients from grains, fruits, and vegetables. These non-meat foods are not simply fillers, but can be a valuable source of essential vitamins, minerals, and fiber. A good dog food will contain meat, vegetables, grains, and fruits. The best dog foods contain high-quality versions of these ingredients that are appropriate for your dog’s digestive system."},
                        {header:"Get more pet updates?",content:"Get the most up-to-date pet care information from ASPCA experts in behavior, nutrition, poison control, veterinary medicine and the human-animal bond"},
                        {header:"What is the pest pet shop?",content:"We all love our furry friends, but sometimes it’s hard to know which pet stores are reliable and which ones are just trying to clear the shelves. That’s why this compilation of pet shops includes only the highest-rated establishments in the city. So make sure your four-legged, winged, and gilled family members are taken care of with our quick guide to Cairo’s best pet stores: Petsoffice Offering products for fish, dogs, cats, rodents, and birds, Petsoffice aims to be the one-stop-shop for all your pet’s needs. With shops in Sheikh Zayed, Maadi, New Cairo, and Madinaty, they even offer free delivery for orders over 5OOLE.Working hours: 9 am to 10 pm – Zamalek: 9a m to 11 pm  s: 10 am to 12 am Visit the website or call 01012241838"}]
    return (
        <>
        <div className="ask">
            
            <div className='pics'>
                <img className="image" src={cat} alt='dog'/>
            </div>
            <div className='acord'>
                <div>
                    <h1>Frequently Asks Questions</h1>
                    <h5>We will provide you with all the information you need, just feel free to ask what you want to know</h5>
                </div>
                <Accordion>
                    {
                        acordionData.map((data,i)=>(
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header>{data.header}</Accordion.Header>
                                <Accordion.Body>{data.content}</Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                    
                    <Card>
                        <Card.Header className="card">
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