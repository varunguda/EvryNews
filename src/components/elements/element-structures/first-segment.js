import React from 'react';

import './styles/first-segment.css';

import MainCard from '../main-card.js';
import MiniCard from '../mini-card.js';
import MiniDescCard from '../mini-desc-card';
import Headlines from '../headlines';
import HeadlinesList from '../headlines-list';

export default function FirstSegment( { category, top, articles }) {

  //needs 49 articles
  
  return (
    <div className='first-segment-container main-segment-container segment-container' style={{marginTop: top}}>
      
        <div className='content-container-1'>
          {(articles && articles.length>0)?
            <MainCard height= '360px' width='100%'  articles={articles.slice(0,2)}/>:
            <MainCard height= '360px' width='100%'/>
          }

          <div className='container-1-grid'>
            {
              [...Array(20)].map((_, index) => {
                const article = (articles && articles.length>0 && articles.slice(2,22)[index]) || {}; // Use an empty object if article doesn't exist at the current index
            
                return (
                  <div key={article.url || index} className='grid-elem'>
                    <MiniDescCard height='54px' width='96%' imageUrl={article.urlToImage} title={article.title} article={article} url={article.url}/>
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className='content-container-2'>
          {
            [...Array(6)].map((_,index)=>{
              const article = (articles && articles.length>0 && articles.slice(25,31)[index]) || {};

              return <MiniCard key={article.url || index} height='155px' width='100%' imageUrl={article.urlToImage} title={article.title} article={article} url={article.url}/>

            })
          }
        </div>
          {(articles && articles.length > 0)?
            (
              <div className='content-container-3'>
                <Headlines height='300px' width='88%' category={category} articles={articles.slice(22,25)}/>
                <HeadlinesList length={18} containerId={1} articles={articles.slice(31,49)}/>
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
