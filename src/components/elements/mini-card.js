
import React from 'react'

import './styles/mini-card.css';
import DescCard from './desc-card';

// https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

export default function MiniCard({ height, width, direction, data }) {
  return (
    <div className='card-container' style={{height: `${height}`, width: `${width}`, flexDirection: direction?`${direction}`:`column`}}>
      <div className="card-image-container" style={{ height: '60%', width: '100%'}}>
        <img alt='mini-card-image' src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='card-image'/>
      </div>
        <DescCard height='40%' width='100%' data= {data?`${data}`:'Lorem ipsum dolor comsu nsit amet conset'}/>
    </div>
  )
}
