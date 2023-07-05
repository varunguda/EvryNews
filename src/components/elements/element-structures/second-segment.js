
import React from 'react';

import './styles/second-segment.css';
import MiniCard from '../mini-card.js';
import DescCard from '../desc-card';

export default function SecondSegment() {
  return (
    <div className='second-segment-container main-segment-container'>
      <div className='section'>
        <div className='section-head second-section-head'>TECH</div>
        <div className='sec-container'>
          <MiniCard height='160px' width='100%' direction= 'row' data='Ipsum nau skalaana magna eu laborum cupidatat.'/>
          <div className='sec-container-segment'>
            <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='45%'/>
            <DescCard data='Ut exercitation officia officia occaecat sit duis in consecte' height='70px' width='45%'/>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='section-head second-section-head'>AUTO</div>
        <div className='sec-container'>
          <MiniCard height='160px' width='100%' direction= 'row' data='Ipsum nau skalaana magna eu laborum cupidatat.'/>
            <div className='sec-container-segment'>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='45%'/>
              <DescCard data='Ut exercitation officia officia occaecat sit duis in consecte' height='70px' width='45%'/>
            </div>
        </div>
      </div>
      <div className='section'>
        <div className='section-head second-section-head'>TRENDING</div>
        <div className='sec-container'>
          <MiniCard height='160px' width='100%' direction= 'row' data='Ipsum nau skalaana magna eu laborum cupidatat.'/>
            <div className='sec-container-segment'>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='45%'/>
              <DescCard data='Ut exercitation officia officia occaecat sit duis in consecte' height='70px' width='45%'/>
            </div>
        </div>
      </div>
    </div>
  )
}
