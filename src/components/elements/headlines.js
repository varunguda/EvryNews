import React from 'react';
import { Link } from 'react-router-dom';

import './styles/headlines.css';
import MiniDescCard from './mini-desc-card';

export default function Headlines({ height, width }) {

  const data = 'Nostrud proident aliquip ullamco reprehenderit elitDeserunt ipsum aute adipisicing ad laboris in sunt incididunt consequat adipisicing ad.'

  return (
    <div className='headlines-container' style={{ height:`${height}`, width: `${width}`}}>
      <div className='headlines-head'>
        <div className="navigator-head" style={{fontSize: '16px', marginLeft: '0%'}}>
          <Link to='/'>EN</Link>
        </div>
        <div>
        </div>
      </div>

      <div className='headlines-list'>
        <MiniDescCard height='54px' width='96%' data= {data}/>
        <MiniDescCard height='54px' width='96%' data= {data}/>
        <MiniDescCard height='54px' width='96%' data= {data}/>
      </div>
    </div>
  )
}
