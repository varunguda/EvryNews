import React from 'react';

import './styles/navbar.css';
import './styles/content.css'
import NavbarSecondary from '../elements/navbar2';
import MainCard from '../elements/main-card.js';
import MiniCard from '../elements/mini-card.js';

export default function Content() {
  return (
    <div className='main-container'>
      <NavbarSecondary />
      <div className='main-content-container'>
        <div className='content-container-1'>
          <MainCard />
        </div>
        <div className='content-container-2'>
          <MiniCard height='140px' width='80%'/>
          <MiniCard height='140px' width='80%'/>
          <MiniCard height='140px' width='80%'/>
          <MiniCard height='140px' width='80%'/>
          <MiniCard height='140px' width='80%'/>
          <MiniCard height='140px' width='80%'/>
          <MiniCard height='140px' width='80%'/>
        </div>
        <div className='content-container-3'>
          {/* <MainCard /> */}
        </div>
      </div>
    </div>
  )
}
