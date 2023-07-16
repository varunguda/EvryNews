import React from 'react';

import './styles/mini-card.css';

export default function DescCard({ height, width, data, url}) {

  return (
      <div className='description-card-container' style={{height:`${height}`, width: `${width}`}}>
          <div className='description-card'>
            {
              ( data)?
              (( data )? <a href={url} className='card-link' target='_blank' rel='noreferrer'>{data}
              </a>: ''):(
                <>
                  <div className="text-placeholder placeholder"></div>
                  <div className="text-placeholder placeholder"></div>
                </>
              )
            }
          </div>
      </div>
  )
}
