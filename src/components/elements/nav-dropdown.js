import React from 'react';

import MiniCard from './mini-card';
import DescCard from './desc-card';
import './styles/nav-dropdown.css';

export default function Dropdown() {
  return (
    <div className='nav-elem-dropdown'>
      <div className="dropdown-grid">
        <strong><MiniCard height='130px' width='120px'/></strong>
        <strong><MiniCard height='130px' width='120px'/></strong>
        <strong><MiniCard height='130px' width='120px'/></strong>
        <strong><MiniCard height='130px' width='120px'/></strong>
        <strong><MiniCard height='130px' width='120px'/></strong>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
        <div className='desc-card'><DescCard height='50px' width='120px' data='Lorem ipsum dolor sit amet consectetur...'/></div>
      </div>
    </div>
  )
}
