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
import EighthSegment from './eighth-segment';
import FooterSegment from './footer';

export default function Content() {

  return (
    <div className='main-container'>
      <NavbarSecondary />
      <FirstSegment />
      <SecondSegment />
      <ThirdSegment />
      <FourthSegment />
      <FifthSegment title="world" containerId={3}/>
      <SixthSegment />
      <div style={{marginTop:'510px'}}>
        <ThirdSegment />
      </div>
      <SeventhSegment title="SPORTS" containerId={4}/>
      <div style={{marginTop:'120px'}}>
        <SeventhSegment title="TRAVEL" containerId={5}/>
      </div>
      <EighthSegment title='politics'/>
      <div style={{marginTop:'110px'}}>
        <FifthSegment title='Business' containerId={6}/>
      </div>
      <div className='last-segment' style={{marginTop:'130px'}}>
        <EighthSegment title='EDUCATION'/>
      </div>
      <FooterSegment />
    </div>
  )
}
