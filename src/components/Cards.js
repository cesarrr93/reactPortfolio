import React from 'react';
import '.Card.css';


function Card({title,gitHubUrl, deplymentUrl, body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
        <img src={imageUrl} alt=''/>
            </div>
        </div>
    )
}
export default Card;