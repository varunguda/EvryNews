

import React from 'react';

import './styles/first-segment.css';

import MainCard from '../main-card.js';
import MiniCard from '../mini-card.js';
import MiniDescCard from '../mini-desc-card';
import Headlines from '../headlines';
import HeadlinesList from '../headlines-list';

export default function FirstSegment() {

  const data = 'Cupidatat aliquip nulla nulla laboris proident enim';

    return (
    <div className='first-segment-container main-segment-container'>
        <div className='content-container-1'>
          <MainCard height= '320px' width='100%'/>
          <div className='container-1-grid'>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div><MiniDescCard height='50px' width='96%' data= {data}/></div>
            <div><MiniDescCard height='50px' width='96%' data= {data}/></div>
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
          <Headlines height='300px' width='88%'/>
          <HeadlinesList dataArr={['Sit nisi incididunt fugiat consectetur dolore.','Mollit mollit eu amet officia.','Velit sunt cillum deserunt anim velit proident anim anim proident reprehenderit eu irure Lorem.']} containerId={1}/>
        </div>
    </div>
  )
}
