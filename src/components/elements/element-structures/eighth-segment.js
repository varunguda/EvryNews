import React from 'react';
import { Link } from 'react-router-dom';

import './styles/eighth-segment.css';

import MiniCard from '../mini-card';

export default function EighthSegment({ category , top, articles  }) {
  return (
    <div className='eighth-segment-container main-segment-container segment-container' style={{top: top}}>
        {category?(<div className='section-head seventh-segment-section-head'>
          <Link to={`/${category.toLowerCase()}`} className='link-text'>{category}</Link>
        </div>):''}
        <div className="eighth-sec-container">
          {
              [...Array(6)].map((_,index)=>{
                const article = (articles && articles.length>0 && articles[index]) || {};
                
                return <MiniCard key={article.url || index} height='150px' width='100%' article={article} imageUrl={article.urlToImage} title={article.title} url={article.url}/>
              })
          }
        </div>
    </div>
  )
}
