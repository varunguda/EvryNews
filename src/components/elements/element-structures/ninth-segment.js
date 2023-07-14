
import React from 'react';

import './styles/ninth-segment.css';
import MainCard from '../main-card';
import DescCard from '../desc-card';

export default function NinthSegment({ articles }) {
  return (
    <div className='ninth-segment-container main-segment-container segment-container'>
        <div className="ninth-seg-sec">
            <div className="ninth-seg-first-part">
              {
                (articles && articles.length>0)?(
                  <MainCard width='100%' height='360px' articles={articles.slice(0,2)}/>
                ):(
                  <MainCard width='100%' height='360px'/>
                )
              }
            </div>
            <div className="description-grid">
                {
                  (articles && articles.length>0)?(
                    articles.slice(2,13).map((article)=>{
                      return <DescCard key={article.url} height='54px' width='100%' data={article.title} url={article.url}/>   
                    })
                  ):(
                    [...Array(11)].map((_,index)=>{
                      return <DescCard key={index} height='54px' width='100%'/>
                    })
                  )
                }
            </div>
        </div>
    </div>
  )
}
