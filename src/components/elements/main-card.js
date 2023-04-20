
import React from 'react';

import './styles/main-card.css';

export default function MainCard() {
  return (
    <div className='main-card-container'>
        <div className='main-card-image-container'>
            <img className='main-card-image' src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='main-card-image'/>
        </div>
        <div className='main-card-description'>
            Lorem
        </div>
    </div>
  )
}
