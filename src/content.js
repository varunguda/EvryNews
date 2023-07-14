import React, { useState, useEffect } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import './components/layout/styles/navbar.css';

import NavbarSecondary from './components/elements/navbar2';
import Home from './components/layout/home';
import India from './components/layout/india';
import World from './components/layout/world';
import Business from './components/layout/business';
import Tech from './components/layout/tech';
import Sports from './components/layout/sports';
import Cricket from './components/layout/cricket';
import Entertainment from './components/layout/entertainment';
import Education from './components/layout/education';
import Auto from './components/layout/auto';
import Health from './components/layout/health';
import Politics from './components/layout/politics';

export default function Content({ fetchNewsArticles, fetchIoArticles, pageCount}) {

  const [politicsArticles, setPoliticsArticles] = useState([]);

  const [ trendArticles, setTrendArticles ] = useState([]);

  const [ popularArticles, setPopularArticles ] = useState([]);

  const [ indiaArticles, setIndiaArticles ] = useState([]);

  const [ entertainmentArticles, setEntertainmentArticles ] = useState([])

  const [ worldArticles, setWorldArticles ] = useState([]);

  const [ cricketArticles, setCricketArticles ] = useState([]);

  const [ techArticles, setTechArticles ] = useState([]);

  const [ sportsArticles, setSportsArticles ] = useState([]);

  const [ autoArticles, setAutoArticles ] = useState([]);

  const [ healthArticles, setHealthArticles ] = useState([]);

  const [ educationArticles, setEducationArticles ] = useState([]);

  const [ topBusinessArticles, setTopBusinessArticles ] = useState([]);

  const [ businessArticles, setBusinessArticles] = useState([]);

  useEffect(()=>{

    // fetchIoArticles('https://newsdata.io/api/1/news?apikey=pub_2602618a1488be33a36dd70a65f0f5fd279fd&category=politics&country=in&language=en',setPoliticsArticles);

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&apiKey=538bf8f17b8e4aa884661289d0714ee1',setIndiaArticles);

    // fetchNewsArticles('https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=538bf8f17b8e4aa884661289d0714ee1', setPopularArticles);

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?q=india&apiKey=538bf8f17b8e4aa884661289d0714ee1', setTrendArticles);

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=538bf8f17b8e4aa884661289d0714ee1', setEntertainmentArticles);

    // fetchNewsArticles('https://newsapi.org/v2/everything?sortBy=popularity&q=world&apiKey=538bf8f17b8e4aa884661289d0714ee1', setWorldArticles);

    // fetchNewsArticles('https://newsapi.org/v2/everything?sortBy=relevance&q=cricket&apiKey=538bf8f17b8e4aa884661289d0714ee1', setCricketArticles);

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=538bf8f17b8e4aa884661289d0714ee1', setTechArticles);

    // fetchNewsArticles('https://newsapi.org/v2/everything?q=sports&sortBy=relevance&apiKey=538bf8f17b8e4aa884661289d0714ee1', setSportsArticles);

    // fetchNewsArticles('https://newsapi.org/v2/everything?q=automobile&language=en&sortBy=relevance&apiKey=538bf8f17b8e4aa884661289d0714ee1', setAutoArticles)
    
    // fetchNewsArticles('https://newsapi.org/v2/everything?q=education&language=en&sortBy=relevance&apiKey=538bf8f17b8e4aa884661289d0714ee1', setEducationArticles)

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=538bf8f17b8e4aa884661289d0714ee1', setHealthArticles)

    // fetchNewsArticles('https://newsapi.org/v2/top-headlines?country=in&category=business&sortBy=relevance&apiKey=538bf8f17b8e4aa884661289d0714ee1', setTopBusinessArticles)
    
    // fetchNewsArticles('https://newsapi.org/v2/everything?q=business&sortBy=relevance&apiKey=538bf8f17b8e4aa884661289d0714ee1', setBusinessArticles)

  },[])


  return (
    <div className='main-container'>
      <Router>
        <NavbarSecondary 
          indiaArticles={popularArticles.slice(27,43)}
          worldArticles={worldArticles.slice(10,25)}
          cricketArticles={cricketArticles.slice(0,15)}
          techArticles = {techArticles.slice(0,15)}
          sportsArticles={sportsArticles.slice(0,15)}
          politicsArticles={politicsArticles.slice(0,15)}
          educationArticles={educationArticles.slice(0,15)}
          autoArticles={autoArticles.slice(3,18)}
          healthArticles={healthArticles.slice(2,15).concat(healthArticles.slice(0,2))}
          businessArticles={topBusinessArticles.slice(5,20)}
          entertainmentArticles={entertainmentArticles.slice(0,15)}
        />

        <Routes>
          <Route 
          path='/' 
          element=
            {<Home 
            politicsArticles={politicsArticles}
            popularArticles={popularArticles.slice(0,27)}
            trendArticles={trendArticles.slice(0,20)}
            indiaArticles={indiaArticles.slice(0,10)}
            entertainmentArticles={entertainmentArticles.slice(0,19)}
            worldArticles={worldArticles.slice(0,10)}
            cricketArticles={cricketArticles.slice(15,39)}
            techArticles={techArticles.slice(0,20)}
            sportsArticles={sportsArticles.slice(14,20)}
            autoArticles={autoArticles.slice(18,28).concat(autoArticles.slice(0,3))}
            healthArticles={healthArticles.slice(14,20)}
            businessArticles={topBusinessArticles.slice(0,17)}
            />}
          />

          {
            (popularArticles && popularArticles.length>0)?(
              [...Array(pageCount(popularArticles.length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/india${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<India
                   category='india'
                   articles={indiaArticles.slice(10,20).concat(indiaArticles.slice(0,10))}
                   topHeadlines={popularArticles.slice(0,3)}
                   pageArticles={popularArticles.slice(3).slice(20*index,20*(index+1))}
                   totalPages={pageCount(popularArticles.length)}
                   />} 
                  />
                )
              })
            ):(
              <Route 
                  path='/india' 
                  element=
                  {<India
                   category='india'
                   />} 
                  />
            )
          }


          {
            (businessArticles && businessArticles.length>0)?(
              [...Array(pageCount(topBusinessArticles.slice(3,17).concat(businessArticles).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/business${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Business
                   category='business'
                   pageArticles={topBusinessArticles.slice(3,17).concat(businessArticles).slice(20*index,20*(index+1))}
                   topHeadlines={topBusinessArticles.slice(0,3)}
                   totalPages={pageCount(topBusinessArticles.slice(3,17).concat(businessArticles).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/business' element= {<Business category='business'/>} />
            )
          }


          {
            (worldArticles && worldArticles.length>0)?(
              [...Array(pageCount(worldArticles.length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/world${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<World
                   category='world'
                   pageArticles={worldArticles.slice(27).slice(20*index,20*(index+1))}
                   articles={worldArticles.slice(3,27)}
                   topHeadlines={worldArticles.slice(0,3)}
                   totalPages={pageCount(worldArticles.slice(27).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/world' element= {<World category='world'/>} />
            )
          }



          <Route path='/tech' element={<Tech category='tech'/>} />
          <Route path='/sports' element={<Sports category='sports'/>} />
          <Route path='/cricket' element={<Cricket category='cricket'/>} />
          <Route path='/entertainment' element={<Entertainment category='entertainment'/>} />
          <Route path='/education' element={<Education category='education'/>} />
          <Route path='/auto' element={<Auto category='auto'/>} />
          <Route path='/health' element={<Health category='health'/>} />
          <Route path='/politics' element={<Politics category='politics'/>} />
        </Routes>
      </Router>
    </div>
  )
}
