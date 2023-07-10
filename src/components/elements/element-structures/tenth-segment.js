import React from 'react'

import './styles/tenth-segment.css';
import Pages from '../pages';
import Headlines from '../headlines';

export default function TenthSegment({ alp, top, category }) {
  return (
    <div className='tenth-segment-container segment-container' style={{top:`${top}`}}>
        <div className="tenth-seg-first-part">
          <Pages alp={alp} category={category} height='780px' width='100%'/>
        </div>
        <div className="tenth-seg-second-part">
          <Headlines height='300px' category={category}/>
        </div>
    </div>
  )
}
