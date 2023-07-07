import React from 'react';

import './styles/navbar.css';


import FirstSegment from '../elements/element-structures/first-segment.js';
import SecondSegment from '../elements/element-structures/second-segment';
import ThirdSegment from '../elements/element-structures/third-segment';
import FourthSegment from '../elements/element-structures/fourth-segment';
import FifthSegment from '../elements/element-structures/fifth-segment';
import SixthSegment from '../elements/element-structures/sixth-segment';
import SeventhSegment from '../elements/element-structures/seventh-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Home() {

  return (
    <>
      <FirstSegment />
      <SecondSegment />
      <ThirdSegment />
      <FourthSegment />
      <FifthSegment title="world" containerId={3}/>
      <SixthSegment title='Sports' top='660px'/>
      <div style={{marginTop:'510px'}}>
        <ThirdSegment />
      </div>
      <SeventhSegment title="SPORTS" containerId={4}/>
      <div style={{marginTop:'120px'}}>
        <SeventhSegment title="TRAVEL" containerId={5}/>
      </div>
      <EighthSegment title='EDUCATION' top='530px'/>
      <div style={{marginTop:'110px'}}>
        <FifthSegment title='Business' containerId={6}/>
      </div>
      <div className='last-segment'>
        <EighthSegment title='EDUCATION' top="660px"/>
      </div>
      <FooterSegment top="670px"/>
    </>
  )
}
