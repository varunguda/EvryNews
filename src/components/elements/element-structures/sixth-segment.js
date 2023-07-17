import React from 'react';
import { Link } from 'react-router-dom';

import './styles/sixth-segment.css';
import MainCard from '../main-card';
import DescCard from '../desc-card';

export default function SixthSegment({ category , top, articles }) {

  return (
    <div className='sixth-segment-container main-segment-container segment-container' style={{marginTop:top}}>
        {(category)?<div className='section-head sixth-segment-section-head'>
            <Link to={`/${category.toLowerCase()}`} className='link-text'>{category}</Link>
        </div>:''}
        <div className='sixth-sec-container'>

        {
            [...Array(6)].map((_,index)=>{
                return (
                    <div className='sixth-seg-sec' key={index}>
                        <div className='section-part sixth-sec-part'>
                            <div className='section-segment'>
                                {
                                    (articles && articles.length>0)?(
                                        <MainCard width='100%' height='230px' small = {true} articles={articles.slice((index*4),(index*4)+2)}/>
                                    ):(
                                        <MainCard width='100%' height='230px' small = {true}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className="section-part section-second-part">
                            {
                                (articles && articles.length>0)?(
                                    articles.slice((index*4)+2, (index*4)+4).map((article)=>{
                                        return <DescCard key={article.url} height='54px' width='100%' data={article.title} url={article.url}/>
                                    })
                                ):(
                                    [...Array(2)].map((_,index)=>{
                                        return <DescCard key={index} height='54px' width='100%' />
                                    })
                                )
                            }
                        </div>
                    </div>
                )
            })   
        }

        </div>
    </div>
  )
}
