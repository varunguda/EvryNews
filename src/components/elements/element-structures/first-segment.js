import React from 'react';

import './styles/first-segment.css';

import MainCard from '../main-card.js';
import MiniCard from '../mini-card.js';
import MiniDescCard from '../mini-desc-card';
import Headlines from '../headlines';
import HeadlinesList from '../headlines-list';

export default function FirstSegment( { popularArticles ,trendArticles, category, politicsArticles, top }) {
  
  return (
    <div className='first-segment-container main-segment-container' style={{top: top}}>
      
        <div className='content-container-1'>
          {(politicsArticles && politicsArticles.length>0)?
            <MainCard height= '360px' width='100%'  articles={politicsArticles}/>:
            <MainCard height= '360px' width='100%'/>
          }

          <div className='container-1-grid'>
          {trendArticles && trendArticles.length > 0 ? (
            trendArticles.map((article) => (
              <div className='grid-elem'>
                <MiniDescCard key={article.url} height='54px' width='96%' imageUrl={article.urlToImage} title={article.title} article={article}/>
              </div>
            ))
          ):
          (
            [...Array(20)].map((index) => {
              return <MiniDescCard key={index} height='54px' width='96%'/>
            })
          )
          }
          </div>
        </div>

        <div className='content-container-2'>
        {popularArticles && popularArticles.length > 0 ? (
            popularArticles.slice(3,9).map((article) => (
                <MiniCard key={article.url} height='155px' width='100%' imageUrl={article.urlToImage} title={article.title}/>
            ))
          ):
          (
            [...Array(6)].map((index) => {
              return <MiniCard key={index} height='155px' width='100%' />
            })
          )
          }
        </div>
          {(popularArticles && popularArticles.length > 0)?
            (
              <div className='content-container-3'>
                <Headlines height='300px' width='88%' category={category} articles={popularArticles.slice(0,3)}/>
                <HeadlinesList length={18} containerId={1} articles={popularArticles.slice(9,27)}/>
              </div>
            )
            :(
              <div className='content-container-3'>
                <Headlines height='300px' width='88%' category={category}/>
                <HeadlinesList length={10} containerId={1}/>
              </div>
            )
          }
    </div>
  )
}
