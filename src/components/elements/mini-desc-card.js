

import React from 'react';

import './styles/mini-desc-card.css';

export default function MiniDescCard({ height, width, imageUrl, url, title, article }) {
  return (
    <div className='mini-desc-card'>
      <a href={(article)?url:''} className='card-link' target='_blank' rel='noreferrer'>
        <div className='mini-desc-card-container' style={{width: `${width}`, height: `${height}`}}>

          <div className='card-caption' style={{height:height, width:'65%'}}>
            {
              (article && article.title)?title
              :(
                <div>
                  <div className="text-placeholder placeholder"></div>
                  <div className="text-placeholder placeholder"></div>
                </div>
              )
            }
          </div>
          
          <div className='desc-card-image-container' style={{width: `35%`, height: '100%'}}>
            {
              (article && article.url)?
                <img className='desc-card-image' src={(imageUrl)?imageUrl:'./site-logo-b&w.png'} alt='mdc'/>:
                <div className="image-placeholder placeholder"></div>
            }
          </div>
        </div>
      </a>
    </div>
  )
}
