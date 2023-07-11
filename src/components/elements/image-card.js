

import React from 'react';

import './styles/image-card.css';
import DescCard from './desc-card';

export default function ImageCard({height, width, title, imageUrl, url}){
    return(
        <div className='image-card-container' style={{ height: `${height}`, width:`${width}`}}>
            <div className='image-card-image-container' style={{ height: `70%`, width:`100%`}}>
                {
                    (imageUrl)?
                    (<img 
                    className='image-card-image' 
                    src= {imageUrl}
                    alt='card'/>):
                    <div className="image-card-image image-placeholder placeholder"></div>
                }
            </div>
            <DescCard height='30%' width='100%'/>
        </div>
    )
}