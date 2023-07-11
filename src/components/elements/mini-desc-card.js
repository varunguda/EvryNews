

import React from 'react';

import './styles/mini-desc-card.css';
import DescCard from './desc-card';

export default function MiniDescCard({ height, width, imageUrl, url, title }) {
  return (
    <a href={(url)?url:'/'} target='_blank' style={{color: 'black'}}>
    <div className='mini-desc-card-container' style={{width: `${width}`, height: `${height}`}}>

        <DescCard height={`${height}`} width='65%' data= {(title)?title:''}/>
        
        <div className='desc-card-image-container' style={{width: `35%`, height: '100%'}}>
          {
            (imageUrl)?
              <img className='desc-card-image' src={(imageUrl)?imageUrl:'./site-logo-image.png'} alt='mini-desc-card'/>:
              <div className="image-placeholder placeholder"></div>
          }
        </div>
    </div>
    </a>
  )
}
