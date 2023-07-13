import React from 'react';
import { Link } from 'react-router-dom';

import './styles/fourth-segment.css';
import MiniCard from '../mini-card';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import ImageCard from '../image-card';

export default function FourthSegment({ category, top, articles }) {
  return (
    <div className='fourth-segment-container main-segment-container segment-container' style={{top:top}}>
        {category?(
            <div className='section-head fourth-segment-section-head'>
                {category}
            </div>
        ):''}
        <div className='fourth-sec-container'>
            <div className='section section1'>
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
                            (articles && articles.length>0)?(articles.slice(2, 6).map((article) => (
                                <MiniCard key={article.url} height='155px' width='100%' imageUrl={article.urlToImage} title={article.title} url={article.url}/>
                            ))):(
                                [...Array(4)].map((index)=>{
                                    return <MiniCard key={index} height='155px' width='100%'/>
                                })
                            )
                        }
                    </div>
                </div>
                <div className='section-sec-segment section-segment'>
                    {
                        (articles && articles.length>0)?(
                            <HeadlinesList length={4} articles={articles.slice(6,10)}/>
                            ):(
                            <HeadlinesList length={3}/>
                        )
                    }
                </div>
            </div>
            <div className='section section2'>
                <div className='section-head fourth-segment-small-head'>
                    <span className="navigator-head" style={{fontSize: '13px', marginLeft: '0%'}}>
                        <Link to='/'>EN</Link>
                    </span> TERTAINMENT PHOTOS
                </div>
                <div className='entertainment-section'>
                    {
                    (articles && articles.length>0)?(
                        (articles.slice(10,19).map((article)=>{
                            return <ImageCard key={article.url} imageUrl={article.urlToImage} title={article.title} url={article.url} height='160px' width='100%'/>
                        }))
                        ):(
                            [...Array(9)].map((index)=>{
                                return <ImageCard key={index} height='160px' width='100%'/>
                            })
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
