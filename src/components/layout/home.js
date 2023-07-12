import React from 'react';
import { useState, useEffect } from 'react';

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

export default function Home() {
  
  const [politicsArticles, setPoliticsArticles] = useState([]);

  const [ topArticles, setTopArticles ] = useState([]);

  const [ popArticles, setPopArticles ] = useState([]);

  const fetchNewsArticles = async (api, fetchFn) =>{
    try{
      let response = await fetch(api);
      let jsonData = await response.json();
      fetchFn(jsonData.articles);
    }catch(err){
      console.log('Error while fetching the data:' + err);
    }
  }

  const fetchIoArticles = async (api, fetchFn) =>{
    try{
      let response = await fetch(api);
      let jsonData = await response.json();
      fetchFn(jsonData.results)
    }catch(err){
      console.log('Error while fetching the data:' + err);
    }
  }

  useEffect(()=>{
    // fetchIoArticles('https://newsdata.io/api/1/news?apikey=pub_2602618a1488be33a36dd70a65f0f5fd279fd&category=politics&country=in&language=en',setPoliticsArticles);

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&apiKey=538bf8f17b8e4aa884661289d0714ee1',setTopArticles)

    // fetchNewsArticles('https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=538bf8f17b8e4aa884661289d0714ee1', setPopArticles);



  },[])

  return (
    <>
      <FirstSegment 
      politicsArticles={politicsArticles.slice(0,2)}
      topArticles={topArticles}
      popArticles = {popArticles}
      />
      <SecondSegment top='180px'/>
      <ThirdSegment category='india' top='290px'/>
      <FourthSegment category='entertainment' top='420px'/>
      <FifthSegment category="world" top='560px'/>
      <SixthSegment category='cricket' top='690px'/>
      <ThirdSegment category='politics' top='820px'/>
      <SeventhSegment category="Business" top='950px'/>
      <SeventhSegment category="Tech" top='1070px'/>
      <EighthSegment category='sports' top='1200px'/>
      <FifthSegment category='Auto' top='1330px'/>
      <EighthSegment category='Education' top="1460px"/>
      <FooterSegment top="1528px"/>
    </>
  )
}
