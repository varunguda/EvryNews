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
          <SecondSegment top='180px' techArticles={techArticles.slice(5,8)} trendArticles={trendArticles.slice(0,3)} autoArticles={autoArticles.slice(10,13)} />
        ):(
          <SecondSegment top='180px' />
        )
      }

      {
        (indiaArticles && indiaArticles.length>0)?(
          <ThirdSegment category='india' top='290px' articles={indiaArticles}/>
        ):(
          <ThirdSegment category='india' top='290px' />  
        )
      }

      {
        (entertainmentArticles && entertainmentArticles.length>0)?(
          <FourthSegment category='entertainment' top='420px' articles={entertainmentArticles}/>
        ):(
          <FourthSegment category='entertainment' top='420px'/>
        )
      }

      {
        (worldArticles && worldArticles.length>0)?(
          <FifthSegment category="world" top='560px' articles={worldArticles}/>
        ):(
          <FifthSegment category="world" top='560px'/>
        )
      }

      {
        (cricketArticles && cricketArticles.length>0)?(
          <SixthSegment category='cricket' top='690px' articles={cricketArticles}/>
        ):(
          <SixthSegment category='cricket' top='690px'/>
        )
      }

      {
        (movieArticles && movieArticles.length>0)?(
          <ThirdSegment category='movie' top='820px' articles={movieArticles}/>
        ):(
          <ThirdSegment category='movie' top='820px'/>
        )
      }

      {
        (businessArticles && businessArticles.length>0)?(
          <SeventhSegment category="Business" top='950px' articles={businessArticles}/>
        ):(
          <SeventhSegment category="Business" top='950px'/>
        )
      }

      {
        (techArticles && techArticles.length>0)?(
          <SeventhSegment category="Tech" top='1070px' articles={techArticles.slice(4)}/>
        ):(
          <SeventhSegment category="Tech" top='1070px'/>
        )
      }

      {
        (sportsArticles && sportsArticles.length>0)?(
          <EighthSegment category='sports' top='1200px' articles={sportsArticles}/>
        ):(
          <EighthSegment category='sports' top='1200px'/>
        )
      }

      {
        (autoArticles && autoArticles.length>0)?(
          <FifthSegment category='Auto' top='1330px' articles={autoArticles}/>
        ):(
          <FifthSegment category='Auto' top='1330px'/>
        )
      }

      {
        (healthArticles && healthArticles.length>0)?(
          <EighthSegment category='Health' top="1460px" articles={healthArticles}/>
        ):(
          <EighthSegment category='Health' top="1460px"/>
        )
      }
  
      <FooterSegment top="1528px"/>

    </>
  )
}
