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
            (articles && articles.length>0)?(
              articles.map((article)=>{
                return <MiniCard key={article.url} height='150px' width='100%' article={article} imageUrl={article.urlToImage} title={article.title} url={article.url}/> 
              })
            ):(
              [...Array(6)].map((_,index)=>{
                  return <MiniCard key={index} height='150px' width='100%'/>
              })
            )
          }
        </div>
    </div>
  )
}
