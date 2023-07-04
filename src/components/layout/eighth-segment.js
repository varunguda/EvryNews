import React from 'react';

import './styles/eighth-segment.css';

import MiniCard from '../elements/mini-card';

export default function EighthSegment({ title }) {
  return (
    <div className='eighth-segment-container main-segment-container segment-container'>
        <div className='section-head seventh-segment-section-head'>
            {title}
        </div>
        <div className="eighth-sec-container">
          <MiniCard data="China's car market saw little impact of Covid in 2020" height='140px' width='100%'/>
          <MiniCard data="China's car market saw little impact of Covid in 2020" height='140px' width='100%'/>
          <MiniCard data="China's car market saw little impact of Covid in 2020" height='140px' width='100%'/>
          <MiniCard data="China's car market saw little impact of Covid in 2020" height='140px' width='100%'/>
          <MiniCard data="China's car market saw little impact of Covid in 2020" height='140px' width='100%'/>
          <MiniCard data="China's car market saw little impact of Covid in 2020" height='140px' width='100%'/>
        </div>
    </div>
  )
}
