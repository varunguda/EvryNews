

import React from 'react';

import './styles/image-card.css';
import DescCard from './desc-card';

export default function ImageCard({height, width, data}){
    return(
        <div className='image-card-container' style={{ height: `${height}`, width:`${width}`}}>
            <div className='image-card-image-container' style={{ height: `70%`, width:`100%`}}>
                <img className='image-card-image' style={{ height: `100%`, width:`100%`}} src='https://images.unsplash.com/photo-1680562727022-158f17391a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='card'/>
            </div>
            <DescCard height='30%' width='100%' data={data}/>
        </div>
    )
}