
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/third-segment.css';
import NewsCarousel from '../carousel';

export default function ThirdSegment({ top, category, articles }) {
  return (
    <div className='third-segment-container main-segment-container segment-container' style={{marginTop: top}}>
        <div className='third-seg-section'>
          {
            category?(
              <div className='section-head'>
                <Link to={`/${category.toLowerCase()}`} className='link-text'>{category}</Link>
              </div>
            ):''
          }
          {
            (articles && articles.length>0)?(
              <NewsCarousel articles={articles}/>
            ):(
              <NewsCarousel />
            )
          }
        </div>
    </div>
  )
}
