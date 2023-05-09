

import React from 'react';

import './styles/fourth-segment.css';
import MiniCard from '../elements/mini-card';
import MainCard from '../elements/main-card';

export default function FourthSegment() {
  return (
    <div className='fourth-segment-container'>
        <div className='section-head'>
            ENTERTAINMENT
        </div>
        <div className='fourth-sec-container'>
            <div className='section section1'>
                <MainCard width='50%' height='200px' small = {true}/>
            </div>
            <div className='section section2'>
                <div className='test-container'>

                </div>
            </div>
        </div>

    </div>
  )
}
