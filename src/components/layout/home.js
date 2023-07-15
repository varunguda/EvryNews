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
      <FirstSegment articles={indiaArticles.slice(0,2).concat(trendArticles.slice(0,20), popularArticles.slice(2,29))}/>
      <SecondSegment top='180px' techArticles={techArticles.slice(5,8)} trendArticles={trendArticles.slice(0,3)} autoArticles={autoArticles.slice(10,13)} />
      <ThirdSegment category='india' top='290px' articles={indiaArticles}/>
      <FourthSegment category='entertainment' top='420px' articles={entertainmentArticles}/>
      <FifthSegment category="world" top='560px' articles={worldArticles}/>
      <SixthSegment category='cricket' top='690px' articles={cricketArticles}/>
      <ThirdSegment category='movie' top='820px' articles={movieArticles}/>
      <SeventhSegment category="Business" top='950px' articles={businessArticles}/>
      <SeventhSegment category="Tech" top='1070px' articles={techArticles.slice(4)}/>
      <EighthSegment category='sports' top='1200px' articles={sportsArticles}/>
      <FifthSegment category='Auto' top='1330px' articles={autoArticles}/>
      <EighthSegment category='Health' top="1460px" articles={healthArticles}/>
      <FooterSegment top="1528px"/>
    </>
  )
}
