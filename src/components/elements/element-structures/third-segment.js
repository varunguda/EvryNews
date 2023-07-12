
import React from 'react';

import './styles/third-segment.css';
import NewsCarousel from '../carousel';

export default function ThirdSegment({ top, category }) {
  return (
    <div className='third-segment-container main-segment-container' style={{top: top}}>
        <div className='third-seg-section'>
          {
            category?(
              <div className='section-head'>
                {category}
              </div>
            ):''
          }
            <NewsCarousel />
        </div>
    </div>
  )
}
