
import React from 'react';

import './styles/headlines.css';
import MiniDescCard from './mini-desc-card';

export default function Headlines({ height, width }) {

  const data = 'Nostrud proident aliquip ullamco reprehenderit elit'

  return (
    <div className='headlines-container' style={{ height:`${height}`, width: `${width}`}}>
      <div className='headlines-head'>
        <div className="navigator-head" style={{fontSize: '16px', marginLeft: '0%'}}>
          <a href='/'>EN</a>
        </div>
        <div>
          <a className='read-more'>READ MORE STORIES&nbsp;&nbsp;&gt;&gt;</a>
        </div>
      </div>

      <div className='headlines-list'>
        <MiniDescCard height='50px' width='96%' data= {data}/>
        <MiniDescCard height='50px' width='96%' data= {data}/>
        <MiniDescCard height='50px' width='96%' data= {data}/>
      </div>
    </div>
  )
}
