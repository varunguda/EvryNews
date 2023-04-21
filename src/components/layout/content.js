import React from 'react';

import './styles/navbar.css';
import './styles/content.css'
import NavbarSecondary from '../elements/navbar2';
import MainCard from '../elements/main-card.js';
import MiniCard from '../elements/mini-card.js';
import MiniDescCard from '../elements/mini-desc-card';
import Headlines from '../elements/headlines';
import HeadlinesList from '../elements/headlines-list';

export default function Content() {

  const data = 'Cupidatat aliquip nulla nulla laboris proident enim';

  return (
    <div className='main-container'>
      <NavbarSecondary />
      <div className='main-content-container'>
        <div className='content-container-1'>
          <MainCard />
          <div className='container-1-grid'>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div><MiniDescCard height='auto' width='96%' data= {data}/></div>
            <div><MiniDescCard height='auto' width='96%' data= {data}/></div>
          </div>
        </div>
        <div className='content-container-2'>
          <MiniCard height='130px' width='90%'/>
          <MiniCard height='130px' width='90%'/>
          <MiniCard height='130px' width='90%'/>
          <MiniCard height='130px' width='90%'/>
          <MiniCard height='130px' width='90%'/>
          <MiniCard height='130px' width='90%'/>
          <MiniCard height='130px' width='90%'/>
        </div>
        <div className='content-container-3'>
          <Headlines height='310px' width='88%'/>
          <HeadlinesList />
        </div>
      </div>
    </div>
  )
}
