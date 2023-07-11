
import React from 'react'

import './styles/mini-card.css';
import DescCard from './desc-card';

// https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

export default function MiniCard({direction, width, height, url, imageUrl, title }) {
  return (
    <div className='mini-card-container' style={{height: height, width: width,flexDirection: direction?`${direction}`:`column`}}>
      <div className="card-image-container" style={{ height: '68%', width: '100%'}}>
          {
            (imageUrl)?
            (<img alt='mini-card' src={imageUrl} className='card-image'/>):
          <div className="image-placeholder placeholder"></div>
        }
      </div>
        <div className='mini-card-caption' style={{height:'32%', width:'95%', marginLeft: (direction==='row')?'10px':''}}>
          {
            (title)?title
            :(
              <div>
                <div className="text-placeholder placeholder"></div>
                <div className="text-placeholder placeholder"></div>
              </div>
            )
          }
        </div>
    </div>
  )
}

