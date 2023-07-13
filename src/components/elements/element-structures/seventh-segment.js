import React from 'react';

import './styles/seventh-segment.css';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import MiniCard from '../mini-card';
import MiniDescCard from '../mini-desc-card';

export default function SeventhSegment({ category, top, articles }) {
  return (
    <div className='seventh-segment-container main-segment-container segment-container' style={{top: top}}>
        {category?(
            <div className='section-head seventh-segment-section-head'>
                {category}
            </div>
        ):''
        }
        <div className='seventh-sec-container'>
            <div className='section section1 seventh-seg-sec'>
                <div className='section-part'>
                    <div className='section-segment section-first-segment'>
                        {
                            (articles && articles.length>0)?(
                                <MainCard width='100%' height='270px' small = {true} articles={articles.slice(0,2)}/>
                            ):(
                                <MainCard width='100%' height='270px' small = {true}/>
                            )
                        }
                    </div>
                    <div className='section-segment section-sec-segment'>
                    {
                            (articles && articles.length>0)?(
                                <HeadlinesList length={6} articles={articles.slice(2,8)} />
                            ):(
                                <HeadlinesList length={3} />
                            )
                    }
                    </div>
                </div>
                <div className="section-part section-second-part">
                {
                            (articles && articles.length>0)?(
                                articles.slice(8,12).map((article)=>{
                                    return <MiniCard key={article.url} height='155px' width='100%' article={article} imageUrl={article.urlToImage} url={article.url} title={article.title}/>
                                })
                            ):(
                                [...Array(4)].map((_,index)=>{
                                    return <MiniCard key={index} height='155px' width='100%' />
                                })
                            )
                    }
                </div>
            </div>
            <div className="section section2">
                {
                            (articles && articles.length>0)?(
                                articles.slice(10,15).map((article)=>{
                                    return <MiniDescCard key={article.url} height='54px' width='100%' imageUrl={article.urlToImage} title={article.title} article={article}/>
                                })
                            ):(
                                [...Array(4)].map((_,index)=>{
                                    return <MiniDescCard key={index} height='155px' width='100%' />
                                })
                            )
                }
            </div>
        </div>
        
    </div>
    
  )
}
