import React from 'react'

import './styles/tenth-segment.css';
import Pages from '../pages';
import Headlines from '../headlines';

export default function TenthSegment({ top, category, articles }) {
  return (
    <div className='tenth-segment-container segment-container' style={{top:top}}>
        <div className="tenth-seg-first-part">
          {
            (articles && articles.length>0)?(
              <Pages category={category} height='700px' width='100%' articles={articles.slice(3)}/>
            ):(
              <Pages category={category} height='700px' width='100%'/>
            )
          }
        </div>
        <div className="tenth-seg-second-part">
          {
            (articles && articles.length>0)?(
              <Headlines height='300px' category={category} articles={articles.slice(0,3)}/>
            ):(
              <Headlines height='300px' category={category}/>
            )
          }
        </div>
    </div>
  )
}
