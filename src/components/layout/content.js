import React from 'react';

import './styles/navbar.css';

import NavbarSecondary from '../elements/navbar2';
import FirstSegment from './first-segment.js';

export default function Content() {

  return (
    <div className='main-container'>
      <NavbarSecondary />
      <FirstSegment />
    </div>
  )
}
