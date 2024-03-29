

import React from 'react';
import { Link } from 'react-router-dom';

import './styles/fifth-segment.css';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import DescCard from '../desc-card';

export default function FifthSegment({ category, top, articles }){
    return(

    <div className='fifth-segment-container main-segment-container  segment-container' style={{marginTop: top}}>
        {category?(
            <div className='section-head fifth-segment-section-head'>
                <Link to={`/${category.toLowerCase()}`} className='link-text'>{category}</Link>
            </div>
        ):''}
        <div className='fifth-sec-container'>
            <div className='section1 fifth-seg-sec'>
                <div className='section-part'>
                    <div className='section-segment section-first-segment'>
                        {
                            (articles && articles.length >0)?(
                                <MainCard width='100%' height='240px' small = {true} articles={articles.slice(0,2)}/>
                            ):(
                                <MainCard width='100%' height='240px' small = {true}/>
                            )
                        }
                    </div>
                    <div className='section-segment section-sec-segment'>
                        {
                            (articles && articles.length >0)?(
                                <HeadlinesList length={4} articles={articles.slice(5,10)} />
                            ):(
                                <HeadlinesList length={3}/>
                            )
                        }
                    </div>
                </div>
                <div className="section-part section-second-part">
                    {
                        [...Array(3)].map((_,index)=>{
                            const article = (articles && articles.length>0 && articles.slice(2,5)[index])||{};

                            return <DescCard key={article.url || index} height='54px' width='45%' data={article.title}/>
                        })   
                    }
                </div>
            </div>
            <div className="section section2">

            </div>
        </div>
    </div>
)}