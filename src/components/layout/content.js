import React from 'react';

import './styles/navbar.css';
import './styles/content.css'
import NavbarSecondary from '../elements/navbar2';
import MainCard from '../elements/main-card.js';
import MiniCard from '../elements/mini-card.js';
import MiniDescCard from '../elements/mini-desc-card';

export default function Content() {

  const data = 'Cupidatat aliquip nulla nulla laboris proident enim';

  return (
    <div className='main-container'>
      <NavbarSecondary />
      <div className='main-content-container'>
        <div className='content-container-1'>
          <MainCard />
          <div className='container-1-grid'>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
            <MiniDescCard height='50px' width='96%' data= {data}/>
          </div>
        </div>
        <div className='content-container-2'>
          <MiniCard height='140px' width='100%'/>
          <MiniCard height='140px' width='100%'/>
          <MiniCard height='140px' width='100%'/>
          <MiniCard height='140px' width='100%'/>
          <MiniCard height='140px' width='100%'/>
          <MiniCard height='140px' width='100%'/>
          <MiniCard height='140px' width='100%'/>
        </div>
        <div className='content-container-3'>
          {/* <MainCard /> */}
        </div>
      </div>
    </div>
  )
}
