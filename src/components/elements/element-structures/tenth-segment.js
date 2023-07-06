import React from 'react'

import './styles/tenth-segment.css';
import Pages from '../pages';

export default function TenthSegment({ alp }) {
  return (
    <div className='tenth-segment-container main-segment-container segment-container'>
        <Pages alp={alp} height='400px' width='45%'/>
    </div>
  )
}
