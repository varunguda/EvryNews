

import React from 'react';

import './styles/mini-desc-card.css';
import DescCard from './desc-card';

export default function MiniDescCard({ height, width, imageUrl, url, title, article }) {
  return (
    <div className='mini-desc-card'>
      <a href={(article)?url:''} className='card-link' target='_blank' rel='noreferrer'>
        <div className='mini-desc-card-container' style={{width: `${width}`, height: `${height}`}}>

          <DescCard height={`${height}`} width='65%' data= {(title)?title:''}/>
          
          <div className='desc-card-image-container' style={{width: `35%`, height: '100%'}}>
            {
              (article)?
                <img className='desc-card-image' src={(imageUrl)?imageUrl:'./site-logo-b&w.png'} alt='mdc'/>:
                <div className="image-placeholder placeholder"></div>
            }
          </div>
        </div>
      </a>
    </div>
  )
}
