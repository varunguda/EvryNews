import React from 'react';

import './styles/navbar.css';
import FirstSegment from '../elements/element-structures/first-segment.js';
import SecondSegment from '../elements/element-structures/second-segment';
import ThirdSegment from '../elements/element-structures/third-segment';
import FourthSegment from '../elements/element-structures/fourth-segment';
import FifthSegment from '../elements/element-structures/fifth-segment';
import SixthSegment from '../elements/element-structures/sixth-segment';
import SeventhSegment from '../elements/element-structures/seventh-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Home({ movieArticles, popularArticles, trendArticles, indiaArticles, entertainmentArticles, worldArticles, cricketArticles, techArticles, sportsArticles, autoArticles, healthArticles, businessArticles }) {
  
  return (
    <>
      {
        (trendArticles && trendArticles.length>0 | popularArticles && popularArticles.length>0 | indiaArticles && indiaArticles.length>0)?(
          <FirstSegment articles={indiaArticles.slice(0,2).concat(trendArticles.slice(0,20), popularArticles.slice(2,29))}/>
        ):(
          <FirstSegment/>    
        )
      }

      {
        (techArticles && techArticles.length>0 | trendArticles && trendArticles.length>0 | popularArticles && popularArticles.length>0)?(
          <SecondSegment techArticles={techArticles.slice(5,8)} trendArticles={trendArticles.slice(0,3)} autoArticles={autoArticles.slice(10,13)} />
        ):(
          <SecondSegment />
        )
      }

      {
        (indiaArticles && indiaArticles.length>0)?(
          <ThirdSegment category='india' articles={indiaArticles}/>
        ):(
          <ThirdSegment category='india' />  
        )
      }

      {
        (entertainmentArticles && entertainmentArticles.length>0)?(
          <FourthSegment category='entertainment' articles={entertainmentArticles}/>
        ):(
          <FourthSegment category='entertainment' />
        )
      }

      {
        (worldArticles && worldArticles.length>0)?(
          <FifthSegment category="world" articles={worldArticles}/>
        ):(
          <FifthSegment category="world" />
        )
      }

      {
        (cricketArticles && cricketArticles.length>0)?(
          <SixthSegment category='cricket' articles={cricketArticles}/>
        ):(
          <SixthSegment category='cricket'/>
        )
      }

      {
        (movieArticles && movieArticles.length>0)?(
          <ThirdSegment category='movie'articles={movieArticles}/>
        ):(
          <ThirdSegment category='movie'/>
        )
      }

      {
        (businessArticles && businessArticles.length>0)?(
          <SeventhSegment category="Business" articles={businessArticles}/>
        ):(
          <SeventhSegment category="Business" />
        )
      }

      {
        (techArticles && techArticles.length>0)?(
          <SeventhSegment category="Tech" articles={techArticles.slice(4)}/>
        ):(
          <SeventhSegment category="Tech" />
        )
      }

      {
        (sportsArticles && sportsArticles.length>0)?(
          <EighthSegment category='sports'  articles={sportsArticles}/>
        ):(
          <EighthSegment category='sports' />
        )
      }

      {
        (autoArticles && autoArticles.length>0)?(
          <FifthSegment category='Auto' articles={autoArticles}/>
        ):(
          <FifthSegment category='Auto' />
        )
      }

      {
        (healthArticles && healthArticles.length>0)?(
          <EighthSegment category='Health' articles={healthArticles}/>
        ):(
          <EighthSegment category='Health' />
        )
      }
  
      <FooterSegment/>

    </>
  )
}
