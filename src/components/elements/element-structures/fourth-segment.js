import React from 'react';
import { Link } from 'react-router-dom';

import './styles/fourth-segment.css';
import MiniCard from '../mini-card';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import ImageCard from '../image-card';

export default function FourthSegment({ category, top, articles }) {
  return (
    <div className='fourth-segment-container main-segment-container segment-container' style={{marginTop:top}}>
        {category?(
            <div className='section-head fourth-segment-section-head'>
                <Link to={`/${category.toLowerCase()}`} className='link-text'>{category}</Link>
            </div>
        ):''}
        <div className='fourth-sec-container'>
            <div className='section1'>
                <div className='section-first-segment section-segment'>
                    {
                        (articles && articles.length>0)?(
                            <MainCard width='100%' height='240px' small = {true} articles={articles.slice(0,2)}/>
                        ):(
                            <MainCard width='100%' height='240px' small = {true}/>
                        )
                    }
                    <div className='section-grid'>
                        {
                            [...Array(4)].map((_,index)=>{
                                const article = (articles && articles.length>0 && articles.slice(2,6)[index]) || {}

                                    return <MiniCard key={article.url || index} height='155px' width='100%' imageUrl={article.urlToImage} title={article.title} url={article.url} article={article}/>

                            })
                        }
                    </div>
                </div>
                <div className='section-sec-segment section-segment'>
                    {
                        (articles && articles.length>0)?(
                            <HeadlinesList length={5} articles={articles.slice(6,11)}/>
                            ):(
                            <HeadlinesList length={3}/>
                        )
                    }
                </div>
            </div>
            <div className='section2'>
                <div className='section-head fourth-segment-small-head'>
                    <span className="navigator-head" style={{fontSize: '13px', marginLeft: '0%'}}>
                        <Link to='/entertainment'>EN</Link>
                    </span> TERTAINMENT PHOTOS
                </div>
                <div className='entertainment-section'>
                    {
                        [...Array(9)].map((_,index)=>{
                            const article = (articles && articles.length>0 && articles.slice(10)[index]) || {};

                            return <ImageCard key={article.url || index} imageUrl={article.urlToImage} title={article.title} url={article.url} height='160px' width='100%' article={article}/>  
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
