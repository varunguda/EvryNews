
import React from 'react'

import './styles/mini-card.css';
import DescCard from './desc-card';

// https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

export default function MiniCard({ height, width}) {
  return (
    <div className='card-container' style={{height: `${height}`, width: `${width}`}}>
      <div className="card-image-container">
        <img alt='mini-card-image' src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='card-image'/>
      </div>
      {/* <div className="card-description">
        <strong>Lorem ipsum dolor sit amet consectetur...</strong>
      </div> */}
      <DescCard height={height} width={width} data='Lorem ipsum dolor sit amet consectetur'/>
    </div>
  )
}
