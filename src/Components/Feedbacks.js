import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Dog from '../Images/carsol.png'
import pic1 from '../Images/juniperphoton-2KxXG7q4gMo-unsplash.jpg'
import pic2 from '../Images/mailchimp-Cy5dya5MAlI-unsplash.jpg'
const images=[Dog,pic1,pic2];
const feeds=[{id:1,image:"../Images/carsol.png",name:"Dog",feed:"t’s an amazing website it helped me a lot and my dog , i advice every one who had a pet and want to take care of it to visit luna pets ."},
            {id:2,image:"../Images/juniperphoton-2KxXG7q4gMo-unsplash.jpg",name:"Pic 1",feed:"t’s an amazing website it helped me a lot and my dog , i advice every one who had a pet and want to take care of it to visit luna pets ."},
            {id:3,image:"../Images/juniperphoton-2KxXG7q4gMo-unsplash.jpg",name:"Pic 2",feed:"t’s an amazing website it helped me a lot and my dog , i advice every one who had a pet and want to take care of it to visit luna pets ."}]
function Feedbacks() {
        const [currentSlide, setCurrentSlide] = useState(0);

        const handlePrevClick = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
        };
    
        const handleNextClick = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        };
    
        const handlePaginationClick = (index) => {
        setCurrentSlide(index);
        };
    
        return (
        <>
        <div className="feedback">
        <div className='header'>
                <h1> Happy Clients & Feedbacks</h1>
            </div>
            <div className="slider">
                <div className="slider-images">
                {/* {images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                    />
                ))} */}
                {feeds.map((feed)=>(
                    <div className={`feed ${feed.id-1 === currentSlide ? 'active' : ''}`} key={feed.id}
                    src={feed}
                    alt={`Slide ${feed.id}`}>
                    <p >{feed.feed}</p>
                    <div className="account" >
                        <img src={Dog} alt=""/>
                        <div className='account-name'>
                            <h1>{feed.name}</h1>
                        </div>
                    </div>
                </div>
                ))
                    
                }
                </div>
                <div className="slider-controls">
                    {/* <button className="slider__control slider__control--prev" onClick={handlePrevClick}>
                        Prev
                    </button> */}
                    <FontAwesomeIcon className="slider__control slider__control--next" icon={faAngleLeft} onClick={handlePrevClick} />
                    <ul className="slider-pagination">
                        {images.map((_, index) => (
                        <li
                            key={index}
                            className={`slider-pagination-item ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => handlePaginationClick(index)}
                        />
                        ))}
                    </ul>

                    
                        
                    <FontAwesomeIcon className="slider__control slider__control--next" icon={faAngleRight} onClick={handleNextClick} />
                    {/* <button className="slider__control slider__control--next" onClick={handleNextClick}>
                    </button>  */}
                </div>
            </div>
        </div>
            
        </>
        );
}

export default Feedbacks