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
    fetchIoArticles('https://newsdata.io/api/1/news?apikey=pub_2602618a1488be33a36dd70a65f0f5fd279fd&category=politics&country=in&language=en',setPoliticsArticles);

    fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&apiKey=538bf8f17b8e4aa884661289d0714ee1',setTopArticles)

    fetchNewsArticles('https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=538bf8f17b8e4aa884661289d0714ee1', setPopArticles);

  },[])

  return (
    <>
      <FirstSegment 
      politicsArticles={politicsArticles.slice(0,2)}
      topArticles={topArticles}
      popArticles = {popArticles}
      />
      <SecondSegment />
      <ThirdSegment />
      <FourthSegment />
      <FifthSegment title="world" containerId={3}/>
      <SixthSegment title='Sports' top='660px'/>
      <div style={{marginTop:'510px'}}>
        <ThirdSegment />
      </div>
      <SeventhSegment title="SPORTS" containerId={4}/>
      <div style={{marginTop:'120px'}}>
        <SeventhSegment title="TRAVEL" containerId={5}/>
      </div>
      <EighthSegment title='EDUCATION' top='530px'/>
      <div style={{marginTop:'110px'}}>
        <FifthSegment title='Business' containerId={6}/>
      </div>
      <div className='last-segment'>
        <EighthSegment title='EDUCATION' top="660px"/>
      </div>
      <FooterSegment top="670px"/>
    </>
  )
}
