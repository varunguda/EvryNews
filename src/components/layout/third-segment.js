
import React from 'react';

import './styles/third-segment.css';
import NewsCarousel from '../elements/carousel';

export default function ThirdSegment() {
  return (
    <div className='third-segment-container'>
        <div className='third-seg-section'>
            <div className='section-head'>
            INDIA
            </div>
            <NewsCarousel />
        </div>
    </div>
  )
}
