import React from 'react';
import './Cards.css';
import { runBuddy } from '../images';


function Card({ title, gitHubUrl, deploymentUrl, body }) {
    return (
        <div className='card-container'>
            <a href=''>
            <div className='image-container'>
                <img src={ runBuddy } alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>

            <div className='btn'>
                <button>
                    <a href='gitHub'>
                        View more
                    </a>
                </button>
            </div>
            {console.log("inside of card")}
            </a>
        </div>
    )
}
export default Card;

//Add class or id to ancor tags for styling.