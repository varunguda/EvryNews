import React from 'react'

import './styles/tenth-segment.css';
import Pages from '../pages';
import Headlines from '../headlines';

export default function TenthSegment({ top, category, totalPages, pageArticles, topHeadlines }) {
  return (
    <div className='tenth-segment-container segment-container' style={{marginTop:top}}>
        <div className="tenth-seg-first-part">
          {
            (pageArticles && pageArticles.length>0)?(
              <Pages category={category} height='730px' width='100%' articles={pageArticles} totalPages={totalPages}/>
            ):(
              <Pages category={category} height='730px' width='100%'/>
            )
          }
        </div>
        <div className="tenth-seg-second-part">
          {
            (topHeadlines && topHeadlines.length>0)?(
              <Headlines height='300px' category={category} articles={topHeadlines}/>
            ):(
              <Headlines height='300px' category={category}/>
            )
          }
        </div>
    </div>
  )
}
