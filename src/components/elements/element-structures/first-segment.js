

import React from 'react';

import './styles/first-segment.css';

import MainCard from '../main-card.js';
import MiniCard from '../mini-card.js';
import MiniDescCard from '../mini-desc-card';
import Headlines from '../headlines';
import HeadlinesList from '../headlines-list';

export default function FirstSegment( { elements, category }) {

  const data = 'Cupidatat aliquip nulla nulla laboris proident enim Irure excepteur voluptate magna consectetur proident.';

  return (
    <div className='first-segment-container main-segment-container'>
        <div className='content-container-1'>
          <MainCard height= '360px' width='100%'/>
          <div className='container-1-grid'>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div className='grid-elem'><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div><MiniDescCard height='54px' width='96%' data= {data}/></div>
            <div><MiniDescCard height='54px' width='96%' data= {data}/></div>
          </div>
        </div>
        <div className='content-container-2'>
          {elements.map((element)=>{
            return <MiniCard key={element.url} height='155px' width='100%' url={element.url} imageUrl={element.urlToImage} title={element.title} desc={element.description}/>
          })}
        </div>
        <div className='content-container-3'>
          <Headlines height='300px' width='88%' category={category}/>
          <HeadlinesList dataArr={['Sit nisi incididunt fugiat consectetur dolore.','Mollit mollit eu amet officia.Nulla quis laboris adipisicing aute anim exercitation nisi consectetur incididunt enim ut nisi voluptate.','Velit sunt cillum deserunt anim velit proident anim anim proident reprehenderit eu irure Lorem.Magna minim anim occaecat laboris non exercitation in.']} containerId={1}/>
        </div>
    </div>
  )
}
