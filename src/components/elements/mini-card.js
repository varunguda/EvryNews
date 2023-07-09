
import React from 'react'

import './styles/mini-card.css';
import DescCard from './desc-card';

// https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

export default function MiniCard({direction, url, imageUrl, desc, title, width, height }) {
  return (
    <div className='mini-card-container' style={{height: height, width: width,flexDirection: direction?`${direction}`:`column`}}>
      <div className="card-image-container" style={{ height: '68%', width: '100%'}}>
        <img alt='mini-card' src={imageUrl?imageUrl:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} className='card-image'/>
      </div>
        {/* <DescCard height='40%' width='100%' data= {title?`${title}`:'Lorem ipsum dolor comsu nsit amet conset'}/> */}
        <div className='mini-card-caption' style={{height:'32%', width:'95%', marginLeft: (direction==='row')?'10px':''}}>{title?title:'Laborum ea nulla officia commodo minim.Lorem anim reprehenderit quis commodo nisi.'}...</div>
    </div>
  )
}

