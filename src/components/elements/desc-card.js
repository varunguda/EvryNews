import React from 'react';

import './styles/mini-card.css';

export default function DescCard({ height, width, data}) {

  return (
    <div className='description-card-container' style={{height:`${height}`, width: `${width}`}}>
        <div className='description-card'>
          {{data}?`${data.slice(0,50)}...`:"Lorem ipsum dolor sit amet consectetur..."}
        </div>
    </div>
  )
}
