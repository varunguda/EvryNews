import React from 'react';

import MiniCard from './mini-card';
import DescCard from './desc-card';
import './styles/nav-dropdown.css';

export default function Dropdown() {

  const data = 'Lorem ipsum dolor sit amet consectetur';

  return (
    <div className='nav-elem-dropdown'>
      <div className="dropdown-grid">
        <strong><MiniCard height='140px' width='100%'/></strong>
        <strong><MiniCard height='140px' width='100%'/></strong>
        <strong><MiniCard height='140px' width='100%'/></strong>
        <strong><MiniCard height='140px' width='100%'/></strong>
        <strong><MiniCard height='140px' width='100%'/></strong>
        <div className='desc-card'><DescCard height='50px' width='90%' data= {data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
        <div className='desc-card'><DescCard height='50px' width='90%' data={data}/></div>
      </div>
    </div>
  )
}
