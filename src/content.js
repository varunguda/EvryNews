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
import Movie from './components/layout/movie';

export default function Content({ fetchNewsArticles, fetchIoArticles, pageCount, apiKey}) {

  const [ trendArticles, setTrendArticles ] = useState([]);

  const [ popularArticles, setPopularArticles ] = useState([]);

  const [ indiaArticles, setIndiaArticles ] = useState([]);

  const [ topEntertainmentArticles, setTopEntertainmentArticles ] = useState([]);

  const [ entertainmentArticles, setEntertainmentArticles ] = useState([]);

  const [ worldArticles, setWorldArticles ] = useState([]);

  const [ cricketArticles, setCricketArticles ] = useState([]);

  const [ techArticles, setTechArticles ] = useState([]);

  const [ topTechArticles, setTopTechArticles ] = useState([]);

  const [ sportsArticles, setSportsArticles ] = useState([]);

  const [ topSportsArticles, setTopSportsArticles ] = useState([]);

  const [ autoArticles, setAutoArticles ] = useState([]);

  const [ topHealthArticles, setTopHealthArticles ] = useState([]);

  const [ healthArticles, setHealthArticles ] = useState([]);

  const [ educationArticles, setEducationArticles ] = useState([]);

  const [ topBusinessArticles, setTopBusinessArticles ] = useState([]);

  const [ businessArticles, setBusinessArticles] = useState([]);

  const [ movieArticles, setMovieArticles ] = useState([]);


  // Got to know that this is a terrible way to fetch data from an API, but I used to have a very mediocre knowledge about the working of useEffect hooks back then, I haven't changed it later on just to have a track of my learning progress. 
  useEffect(()=>{

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,setIndiaArticles);

    fetchNewsArticles(`https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=${apiKey}`, setPopularArticles);

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?q=india&apiKey=${apiKey}`, setTrendArticles);

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`, setTopEntertainmentArticles);

    fetchNewsArticles(`https://newsapi.org/v2/everything?sortBy=relevance&q=entertainment&apiKey=${apiKey}`, setEntertainmentArticles);

    fetchNewsArticles(`https://newsapi.org/v2/everything?sortBy=popularity&q=world&apiKey=${apiKey}`, setWorldArticles);

    fetchNewsArticles(`https://newsapi.org/v2/everything?sortBy=relevance&q=cricket&apiKey=${apiKey}`, setCricketArticles);

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`, setTopTechArticles);

    fetchNewsArticles(`https://newsapi.org/v2/everything?q=technology&sortBy=relevance&apiKey=${apiKey}`, setTechArticles);

    fetchNewsArticles(`https://newsapi.org/v2/everything?q=sports&sortBy=relevance&apiKey=${apiKey}`, setSportsArticles);

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?country=in&category=sports&sortBy=relevance&apiKey=${apiKey}`, setTopSportsArticles)

    fetchNewsArticles(`https://newsapi.org/v2/everything?q=automobile&language=en&sortBy=relevance&apiKey=${apiKey}`, setAutoArticles)
    
    fetchNewsArticles(`https://newsapi.org/v2/everything?q=education&language=en&sortBy=relevance&apiKey=${apiKey}`, setEducationArticles)

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`, setTopHealthArticles)

    fetchNewsArticles(`https://newsapi.org/v2/everything?q=health&language=en&sortBy=relevance&apiKey=${apiKey}`, setHealthArticles)

    fetchNewsArticles(`https://newsapi.org/v2/top-headlines?country=in&category=business&sortBy=relevance&apiKey=${apiKey}`, setTopBusinessArticles)
    
    fetchNewsArticles(`https://newsapi.org/v2/everything?q=business&sortBy=relevance&apiKey=${apiKey}`, setBusinessArticles)

    fetchNewsArticles(`https://newsapi.org/v2/everything?sortBy=relevance&q=movie&apiKey=${apiKey}`, setMovieArticles);

    // eslint-disable-next-line
  },[ apiKey ])


  return (
    <div className='main-container'>
      <Router>
        {
          (trendArticles && trendArticles.length>0 | popularArticles && popularArticles.length>0 | indiaArticles && indiaArticles.length>0)?(
            <NavbarSecondary 
              indiaArticles={popularArticles.slice(27,43)}
              worldArticles={worldArticles.slice(10,25)}
              cricketArticles={cricketArticles.slice(0,15)}
              techArticles = {techArticles.slice(0,15)}
              sportsArticles={topSportsArticles.slice(5,20)}
              movieArticles={movieArticles.slice(20,35)}
              educationArticles={educationArticles.slice(0,15)}
              autoArticles={autoArticles.slice(30,45)}
              healthArticles={topHealthArticles.slice(2,15).concat(healthArticles.slice(0,2))}
              businessArticles={topBusinessArticles.slice(5,20)}
              entertainmentArticles={topEntertainmentArticles.slice(0,15)}
            />
          ):(
            <NavbarSecondary />
          )
        }

        <Routes>
          {((trendArticles && trendArticles.length>0) || (popularArticles && popularArticles.length>0) || (indiaArticles && indiaArticles.length>0))?(
            <Route 
            path='/' 
            element=
              {<Home 
              movieArticles={movieArticles.slice(0,10)}
              popularArticles={popularArticles.slice(0,27)}
              trendArticles={trendArticles.slice(0,20)}
              indiaArticles={indiaArticles.slice(0,10)}
              entertainmentArticles={topEntertainmentArticles.slice(0,19)}
              worldArticles={worldArticles.slice(0,10)}
              cricketArticles={cricketArticles.slice(15,39)}
              techArticles={techArticles.slice(0,20)}
              sportsArticles={sportsArticles.slice(14,20)}
              autoArticles={autoArticles.slice(18,28).concat(autoArticles.slice(0,3))}
              healthArticles={topHealthArticles.slice(14,20)}
              businessArticles={topBusinessArticles.slice(0,17)}
              />}
            />
          ):<Route 
          path='/' 
          element=
          {<Home/>} 
          />
          }
          

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
              [...Array(pageCount(worldArticles.slice(27).length))].map((_,index)=>{
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


          {
            (techArticles && techArticles.length>0)?(
              [...Array(pageCount(techArticles.length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/tech${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Tech
                   category='tech'
                   articles={topTechArticles.slice(10,20).concat(topTechArticles.slice(0,10))}
                   topHeadlines={topTechArticles.slice(0,3)}
                   pageArticles={techArticles.slice(20*index,20*(index+1))}
                   totalPages={pageCount(techArticles.length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/tech' element= {<Tech category='tech'/>} />
            )
          }


          {
            (sportsArticles && sportsArticles.length>0)?(
              [...Array(pageCount(sportsArticles.slice(32).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/sports${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Sports
                   category='sports'
                   articles={topSportsArticles.slice(3,20).concat(sportsArticles.slice(0,32))}
                   topHeadlines={topSportsArticles.slice(0,3)}
                   pageArticles={sportsArticles.slice(32).slice(20*index,20*(index+1))}
                   totalPages={pageCount(sportsArticles.slice(32).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/sports' element= {<Sports category='sports'/>} />
            )
          }


          {
            (cricketArticles && cricketArticles.length>0)?(
              [...Array(pageCount(cricketArticles.slice(3,30).concat(cricketArticles.slice(54)).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/cricket${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Cricket
                   category='cricket'
                   articles={cricketArticles.slice(30,54)}
                   topHeadlines={cricketArticles.slice(0,3)}
                   pageArticles={cricketArticles.slice(3,30).concat(cricketArticles.slice(54)).slice(20*index,20*(index+1))}
                   totalPages={pageCount(cricketArticles.slice(3,30).concat(cricketArticles.slice(54)).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/cricket' element= {<Cricket category='cricket'/>} />
            )
          }

          {
            (entertainmentArticles && entertainmentArticles.length>0)?(
              [...Array(pageCount(topEntertainmentArticles.slice(0,20).concat(entertainmentArticles.slice(47)).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/entertainment${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Entertainment
                   category='entertainment'
                   articles={entertainmentArticles.slice(3,47)}
                   topHeadlines={entertainmentArticles.slice(0,3)}
                   pageArticles={topEntertainmentArticles.concat(entertainmentArticles.slice(47)).slice(20*index,20*(index+1))}
                   totalPages={pageCount(topEntertainmentArticles.concat(entertainmentArticles.slice(47)).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/entertainment' element= {<Entertainment category='entertainment'/>} />
            )
          }


          {
            (educationArticles && educationArticles.length>0)?(
              [...Array(pageCount(educationArticles.slice(3).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/education${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Education
                   category='education'
                   topHeadlines={educationArticles.slice(0,3)}
                   pageArticles={educationArticles.slice(3).slice(20*index,20*(index+1))}
                   totalPages={pageCount(educationArticles.slice(3).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/education' element= {<Education category='education'/>} />
            )
          }


          {
            (autoArticles && autoArticles.length>0)?(
              [...Array(pageCount(autoArticles.slice(27).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/auto${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Auto
                   category='auto'
                   articles={autoArticles.slice(3,27)}
                   topHeadlines={autoArticles.slice(0,3)}
                   pageArticles={autoArticles.slice(27).slice(20*index,20*(index+1))}
                   totalPages={pageCount(autoArticles.slice(27).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/auto' element= {<Auto category='auto'/>} />
            )
          }


          {
            (healthArticles && healthArticles.length>0)?(
              [...Array(pageCount(topHealthArticles.slice(3).concat(healthArticles.slice(27)).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/health${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Health
                   category='health'
                   pageArticles={topHealthArticles.slice(3).concat(healthArticles.slice(27)).slice(20*index,20*(index+1))}
                   articles={healthArticles.slice(0,20)}
                   topHeadlines={topHealthArticles.slice(0,3)}
                   totalPages={pageCount(topHealthArticles.slice(3).concat(healthArticles.slice(27)).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/health' element= {<Health category='health'/>} />
            )
          }


          {
            (movieArticles && movieArticles.length>0)?(
              [...Array(pageCount(movieArticles.slice(75).length))].map((_,index)=>{
                return (
                  <Route 
                  key={index}
                  path={`/movie${(index>0)?('/'+(index+1)):''}`} 
                  element=
                  {<Movie
                   category='movie'
                   pageArticles={movieArticles.slice(75).slice(20*index,20*(index+1))}
                   articles={movieArticles.slice(3,75)}
                   topHeadlines={movieArticles.slice(0,3)}
                   totalPages={pageCount(movieArticles.slice(75).length)}
                   />} 
                  />
                )
              })
            ):(
              <Route path='/movie' element= {<Movie category='movie'/>} />
            )
          }


        </Routes>
      </Router>
    </div>
  )
}
