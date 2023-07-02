import React from 'react';

import './styles/navbar.css';

import NavbarSecondary from '../elements/navbar2';
import FirstSegment from './first-segment.js';
import SecondSegment from './second-segment';
import ThirdSegment from './third-segment';
import FourthSegment from './fourth-segment';
import FifthSegment from './fifth-segment';
import SixthSegment from './sixth-segment';
import SeventhSegment from './seventh-segment';

export default function Content() {

  return (
    <div className='main-container'>
      <NavbarSecondary />
      <FirstSegment />
      <SecondSegment />
      <ThirdSegment />
      <FourthSegment />
      <FifthSegment />
      <SixthSegment />
      <div style={{marginTop:'330px'}}>
        <ThirdSegment />
      </div>
      <SeventhSegment />
  
    </div>
  )
}
