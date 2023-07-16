
import React from 'react'

import './styles/mini-card.css';

// https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

export default function MiniCard({direction, width, height, url, imageUrl, title, article }) {
  return (
    <div className='mini-card'>
      <a href={url} className='card-link' target='_blank' rel='noreferrer'>
        <div className='mini-card-container' style={{height: height, width: width,flexDirection: direction?`${direction}`:`column`}}>
          <div className="card-image-container" style={{ height: '67%', width: '100%'}}>
            {
              (article)?
              (<img alt='mc' src={(imageUrl)?imageUrl:'./site-logo-b&w.png'} className='card-image'/>
              ):(<div className="image-placeholder placeholder card-image"></div>)
            }
          </div>
          <div className='mini-card-caption' style={{height:'33%', width:'95%', marginLeft: (direction==='row')?'6px':''}}>
            {
              (article)?title
              :(
                <div>
                  <div className="text-placeholder placeholder"></div>
                  <div className="text-placeholder placeholder"></div>
                </div>
              )
            }
          </div>
        </div>
      </a>
    </div>
  )
}

