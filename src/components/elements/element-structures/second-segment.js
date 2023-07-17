
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/second-segment.css';
import MiniCard from '../mini-card.js';
import DescCard from '../desc-card';

export default function SecondSegment({ top, techArticles, autoArticles, trendArticles }) {
  return (
    <div className='second-segment-container main-segment-container segment-container' style={{ marginTop: top}}>
      <div className='section-elem'>
        <div className='section-head second-section-head'>
          <Link to='/tech' className='link-text'>TECH</Link>
        </div>
          {
            (techArticles && techArticles.length>0)?(
              <div className='sec-container'>
                <MiniCard height='160px' width='100%' direction= 'row' article={techArticles[0]} imageUrl={techArticles[0].urlToImage} title={techArticles[0].title} url={techArticles[0].url}/>
                <div className='sec-container-segment'>
                  <DescCard data={techArticles[1].title} url={techArticles[1].url} height='54px' width='45%'/>
                  <DescCard data={techArticles[2].title} url={techArticles[2].url} height='54px' width='45%'/>
                </div>
              </div>
            ):(
              <div className='sec-container'>
                <MiniCard height='160px' width='100%' direction= 'row'/>
                <div className='sec-container-segment'>
                  <DescCard height='54px' width='45%'/>
                  <DescCard height='54px' width='45%'/>
                </div>
              </div>
            )
          }
      </div>
      <div className='section-elem'>
        <div className='section-head second-section-head'>
          <Link to='/auto' className='link-text'>AUTO</Link>
        </div>
        {
            (autoArticles && autoArticles.length>0)?(
              <div className='sec-container'>
                <MiniCard height='160px' width='100%' direction= 'row' article={autoArticles[0]} imageUrl={autoArticles[0].urlToImage} title={autoArticles[0].title} url={autoArticles[0].url}/>
                <div className='sec-container-segment'>
                  <DescCard data={autoArticles[1].title} url={autoArticles[1].url} height='54px' width='45%'/>
                  <DescCard data={autoArticles[2].title} url={autoArticles[2].url} height='54px' width='45%'/>
                </div>
              </div>
            ):(
              <div className='sec-container'>
                <MiniCard height='160px' width='100%' direction= 'row'/>
                <div className='sec-container-segment'>
                  <DescCard height='54px' width='45%'/>
                  <DescCard height='54px' width='45%'/>
                </div>
              </div>
            )
          }
      </div>
      <div className='section-elem'>
        <div className='section-head second-section-head'>
          <Link to='/india' className='link-text'>TRENDING</Link>
        </div>
        {
            (trendArticles && trendArticles.length>0)?(
              <div className='sec-container'>
                <MiniCard height='160px' width='100%' direction= 'row' article={trendArticles[0]} imageUrl={trendArticles[0].urlToImage} title={trendArticles[0].title} url={trendArticles[0].url}/>
                <div className='sec-container-segment'>
                  <DescCard data={trendArticles[1].title} url={trendArticles[1].url} height='54px' width='45%'/>
                  <DescCard data={trendArticles[2].title} url={trendArticles[2].url} height='54px' width='45%'/>
                </div>
              </div>
            ):(
              <div className='sec-container'>
                <MiniCard height='160px' width='100%' direction= 'row'/>
                <div className='sec-container-segment'>
                  <DescCard height='54px' width='45%'/>
                  <DescCard height='54px' width='45%'/>
                </div>
              </div>
            )
          }
      </div>
    </div>
  )
}
