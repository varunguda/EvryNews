

import React from 'react';

import './styles/mini-desc-card.css';
import DescCard from './desc-card';

export default function MiniDescCard({ height, width, data }) {
  return (
    <div className='mini-desc-card-container' style={{width: `${width}`, height: `${height}`}}>
      <DescCard height={`${height}`} width='65%' data= {data}/>
      <div className='desc-card-image-container' style={{width: `35%`, height: '100%'}}>
        <img className='desc-card-image' src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80' alt='mini-desc-card'/>
      </div>
    </div>
  )
}
