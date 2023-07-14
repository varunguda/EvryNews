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
    <div className='first-segment-container main-segment-container' style={{top: top}}>
      
        <div className='content-container-1'>
          {(articles && articles.length>0)?
            <MainCard height= '360px' width='100%'  articles={articles.slice(0,2)}/>:
            <MainCard height= '360px' width='100%'/>
          }

          <div className='container-1-grid'>
          {articles && articles.length > 0 ? (
            articles.slice(2,22).map((article) => {
              return (<div className='grid-elem'>
                <MiniDescCard key={article.url} height='54px' width='96%' imageUrl={article.urlToImage} title={article.title} article={article}/>
              </div>)
            })
          ):
          (
            [...Array(20)].map((_,index) => {
              return <MiniDescCard key={index} height='54px' width='96%'/>
            })
          )
          }
          </div>
        </div>

        <div className='content-container-2'>
        {articles && articles.length > 0 ? (
            articles.slice(25,31).map((article) => {
                return <MiniCard key={article.url} height='155px' width='100%' imageUrl={article.urlToImage} title={article.title} article={article} url={article.url}/>
            })
          ):
          (
            [...Array(6)].map((_,index) => {
              return <MiniCard key={index} height='155px' width='100%' />
            })
          )
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
