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

export default function Home({ politicsArticles, popularArticles, trendArticles, indiaArticles, entertainmentArticles, worldArticles, cricketArticles, techArticles }) {
  
  return (
    <>
      <FirstSegment 
      politicsArticles={politicsArticles}
      trendArticles={trendArticles}
      popularArticles = {popularArticles}
      />
      <SecondSegment top='180px' techArticles={techArticles.slice(5,8)} />
      <ThirdSegment category='india' top='290px' articles={indiaArticles}/>
      <FourthSegment category='entertainment' top='420px' articles={entertainmentArticles}/>
      <FifthSegment category="world" top='560px' articles={worldArticles}/>
      <SixthSegment category='cricket' top='690px' articles={cricketArticles}/>
      <ThirdSegment category='politics' top='820px'/>
      <SeventhSegment category="Business" top='950px'/>
      <SeventhSegment category="Tech" top='1070px' articles={techArticles.slice(5)}/>
      <EighthSegment category='sports' top='1200px'/>
      <FifthSegment category='Auto' top='1330px'/>
      <EighthSegment category='Education' top="1460px"/>
      <FooterSegment top="1528px"/>
    </>
  )
}
